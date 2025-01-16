from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
import json
import logging

# 加载环境变量
load_dotenv()

# 配置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app)  # 启用CORS支持

# 配置
API_KEY = os.getenv('API_KEY')
API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions"

# Prompt模板
GENERATE_PROMPT = """你是一个中式英语（Chinglish）专家。请帮我生成一个有趣的中式英语表达。
要求如下：
1. 表达要源自中文的直译
2. 表达要有趣且实用
3. 必须严格按照以下JSON格式返回：
{
    "chinglish": "中式英语表达",
    "chinese": "对应的中文",
    "pinyin": "中文的拼音",
    "meaning": "正确的英语表达",
    "examples": [
        {
            "chinglish": "例句1",
            "chinese": "中文例句1"
        },
        {
            "chinglish": "例句2",
            "chinese": "中文例句2"
        }
    ]
}

请确保生成的内容：
- 适合日常交流
- 有一定的文化趣味性
- 易于理解
- 不包含不当或敏感内容

请直接返回JSON格式的内容，不要添加任何其他说明。"""

def call_glm4_api(prompt):
    """调用GLM-4 flash API"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    data = {
        "model": "glm-4-flash",  # 使用 flash 版本
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.7,  # 适当的随机性
        "max_tokens": 800    # 足够的长度以容纳完整响应
    }
    
    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        logging.error(f"API调用错误: {e}")
        return None

@app.route('/api/generate', methods=['GET'])
def generate_chinglish():
    """生成新的Chinglish表达"""
    try:
        # 调用API
        response = call_glm4_api(GENERATE_PROMPT)
        
        if not response:
            return jsonify({"error": "API调用失败"}), 500
            
        # 解析API响应
        content = response['choices'][0]['message']['content']
        
        # 尝试解析JSON
        try:
            result = json.loads(content)
            return jsonify(result)
        except json.JSONDecodeError:
            return jsonify({"error": "无法解析API返回的内容"}), 500
            
    except Exception as e:
        logging.error(f"Error in generate_chinglish: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
