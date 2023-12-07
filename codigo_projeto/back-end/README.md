# Aplicação Django para FanAPI

Esta aplicação Django é um exemplo de integração com a FanAPI, uma API que gerencia informações de um ventilador e um sensor de temperatura. Ela está em conjunto com a turma de Mecatrônica e é representada pela matéria de IoT.

# ☁️ Url's para Teste/Uso
- https://squad05.pythonanywhere.com/ (Pythonanywhere)
- https://squad05.pythonanywhere.com/temperature/ (End'Point para JSON)

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/GuilhermeMLeal/MecatronicFan.git
    cd codigo_projeto
    cd back-end
    ```

2. Crie um ambiente virtual e ative-o:

    ```bash
    python -m venv myenv
    source myenv/bin/activate  # Linux/macOS
    # Ou
    myenv\Scripts\activate  # Windows
    ```

3. Instale as dependências:

    ```bash
    pip install -r requirements.txt
    ```

4. Execute as migrações do Django:

    ```bash
    python manage.py migrate
    ```

5. Inicie o servidor:

    ```bash
    python manage.py runserver
    ```

O servidor estará disponível em `http://127.0.0.1:8000/`.

## Uso

### Endpoints da FanAPI

#### Temperaturas pelo sensor

- **GET Temperaturas:** `GET http://127.0.0.1:8000/temperature/`
  - Retorna as temperaturas registradas pelo sensor.

- **POST Temperatura:** `POST http://127.0.0.1:8000/temperature/`
  - Envia uma nova temperatura medida pelo sensor.
  - Exemplo de payload:
    ```json
    {
        "temperature": "45.22"
    }
    ```

- **GET Temperatura específica:** `GET http://127.0.0.1:8000/temperature/1/`
  - Retorna detalhes de uma temperatura específica com ID 1.

#### Controle do Ventilador

- **GET Ventiladores:** `GET http://127.0.0.1:8000/fan/`
  - Retorna informações sobre o estado dos ventiladores.

- **POST Ventilador:** `POST http://127.0.0.1:8000/fan/`
  - Liga ou desliga o ventilador.
  - Exemplo de payload:
    ```json
    {
        "turnOn": false
    }
    ```

- **GET Ventilador específico:** `GET http://127.0.0.1:8000/fan/1/`
  - Retorna detalhes sobre um ventilador específico com ID 1.
