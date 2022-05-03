
![Logo](https://uepapay.com/images/uepa_Pay.svg)


## Referencia de la API

#### Encriptar la informacion

```http
  POST /payments/encriptar
```

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `MerchantId` | `Int` | **Requerido**. Identificador de Vendedor |
| `PublicToken` | `string` | **Requerido**. Token generado para el Vendedor |
| `Data` | `string` | **Required**. Data del Producto |


#### Desencriptar Informacion

```http
  POST /payments/desencriptar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Generar URL final para pagar

```http
  POST /payments/checkout
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
