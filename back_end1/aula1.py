from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/get-user', methods=['GET'])
def get_user():
    try:
        
        url = 'http://meusite.com/usuario/10'
         response.status_code == 200:
            user_data = response.json()

            user_info = {
                'nome': user_data.get('nome'),
                'email': user_data.get('email')
            }
            return jsonify(user_info), 200
        else:
            return jsonify({'error': 'Não foi possível obter as informações do usuário'}), response.status_code
    except Exception as e:
        return jsonify({'error': 'Ocorreu um erro ao processar a requisição', 'detalhes': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
