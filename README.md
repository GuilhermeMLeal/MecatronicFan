# 🍃 MecatronicFan
Projetos dos Alunos de ADS juntamente aos alunos de Mecatrônica - Máteria IOT
### O aplicativo voltado ao projeto de controle de temperatura pelo ventilador utilizará uma interface mobile. Na página principal, o usuário terá acesso às principais funcionalidades, exibindo o status de funcionamento (ligado ou desligado), o gerenciamento do tempo de utilização e o controle da temperatura.


# 📖 Código e API

## ⚙️ Instruções - Projeto Local
#### Para uso do Front com React Native rodando localmente, teremos que iniciar uma série de processos a partir deste repositorio.

-  Clone o repositório:

   ```
   git clone https://github.com/GuilhermeMLeal/MecatronicFan.git
    ```


Para configurar o ambiente de desenvolvimento, siga estas etapas em seu CODER:
- Entre na Pasta Raiz:

    ```
    cd codigo_projeto
    ```
- Na pasta do arquivo:

    ```
    cd front-end
    ```

-   **Baixando as dependências do React Native**

    ```
    npm i
    ```

- Utilize o seguinte comando:

    ```
    npm start
    ```

 Com essas etapas concluídas, seu terminal carregará as funções dependentes e gerará um QRcode no terminal do projeto, esse QRcore, e port Expo, podem ser acessadas pelo aplicativo EXPO Go, que pode ser baixado na loja de aplicativos Android.
![App Screenshot](https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/2e/34/d1/2e34d152-0f11-064d-5dc2-a762f8e24b70/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png)
Apenas aponte seu celular para o QRcode, e automaticamente o aplicativo buildará a versão atual. 

## Para rodar a API(Django) localmente é necessário:
- Na pasta do arquivo:

    ```
    cd Backend
    ```

-   **Crie um ambiente virtual:**

    ```
    python -m venv .env 
    ```

- Utilize o seguinte comando:

    ```
    .env\Scripts\activate
    ```

-  Logo Após, utilize:

    ```
    pip install -r requirements.txt
    ```

- **Rode Local**
    ```
    python manage.py runserver
    ```

## 📄 Documentação da API

A documentação completa da API está disponível [aqui](https://www.notion.so/INTEGRA-O-IT_IA-ADS-f83b1f2e89bb4ec6ab7280778c114bc4?pvs=4).

## Uso/Exemplos

```
- Json FAN
{
    "temperature": 25.0 (Lança o dado equivalente a temperatura de 25° Celsius
    Se baseado no código estiver entre as temperaturas 
    TurnOn ou TurnOff ele poderá ligar ou desligar o ventilador a partir do dado.)
}
```


## Documentação da API

#### Declara a Temperatura Atual 🔽

```http
  POST /temperature
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `Temperatura` | `Float` | **Obrigatório**. Temperatura   |

#### Após o POST, temos o GET de informações para a realização de ligação ou não.

#### Retorno 🔽

```http
  GET /fan
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `fan`      | `Box` | **Obrigatório**. Retorno de Função On ou OFF |

#### Os dois endpoints retornam os propríos dados enviados, no caso de temperature, retorna a temperatura escolhida ou enviada. Já no caso do endpoint de FAN, retorna as requisições da API e do primeiro processo de POST, baseando nos limites e retorna se o ventilador está ligado ou não.


# 🧩 Contribuições

## 👫 Usúarios

-  Integrantes

   ```
   Diego: FRONT-WEB, Integração Back e Front, FIGMA, Documentação FRONT
   Gabriel Henrique: FRONT-WEB, Documentação(Notion), Readme, 1° Protótipo
   Guilherme Martins: ARTIGO, DJANGO-API, Reformulação API, Documentação, Colection Postman.
   Matheus: FRONT-MOBILE, FIGMA, Reformulação Mobile.
   Vicenzo: FRONT-MOBILE, PYTHONANYWHERE, Reformulação Mobile e testes.
    ```
