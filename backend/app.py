# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
from flask_cors import CORS
from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

ACCOUNT_SID = os.getenv('ACCOUNT_SID')
AUTH_TOKEN = os.getenv('AUTH_TOKEN')
TWILIO_NUMBER = os.getenv('TWILIO_NUMBER')

@app.route('/enviar-whatsapp', methods=['POST'])
def enviar_whatsapp():
    try:
        dados = request.json
        nome = dados.get('nome')
        telefone = dados.get('telefone')

        client = Client(ACCOUNT_SID, AUTH_TOKEN)

        msg = f'Olá, {nome}! Recebemos seu contato. Em breve nossa equipe retornará. Obrigado por entrar em contato com a Search&Imóveis!'
        client.messages.create(
            from_=TWILIO_NUMBER,
            to=f'whatsapp:+55{telefone}',
            body=msg
        )

        return jsonify({'sucesso': True}), 200

    except Exception as e:
        return jsonify({'sucesso': False, 'erro': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)