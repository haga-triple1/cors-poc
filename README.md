# CORS PoC

# Concepts
1. クロスオリジンのリクエストについて、レスポンスヘッダーに何を設定すべきか

- Access-Control-Allow-Origin
- Access-Control-Allow-Credentials

1. クロスオリジンの非単純リクエストについて、レスポンスヘッダーに何を設定すべきか

- Access-Control-Allow-Origin
- Access-Control-Allow-Credentials
- Access-Control-Allow-Headers（具体的な送信される値を設定する必要がある）

# 起動
## バックエンド
```bash
cd backend
npx nest start -w
```

## フロントエンド
```bash
cd frontend
npx vite
```



# 検証方法
以下の手順を経て、cookieの値（cors-poc-dummy=dummy）がalertで表示されればOK

## credentialの設定
```
http://127.0.0.1:8080/set-cookie
```

## fetchの検証
```
http://127.0.0.1:5173/
```
