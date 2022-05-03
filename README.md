
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

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `MerchantId` | `Int` | **Requerido**. Identificador de Vendedor |
| `PublicToken` | `string` | **Requerido**. Token generado para el Vendedor |
| `Data` | `string` | **Required**. Data del Producto encriptada |


#### Generar URL final para pagar

```http
  POST /payments/checkout
```

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `MerchantId` | `Int` | **Requerido**. Identificador de Vendedor |
| `Data` | `string` | **Required**. Data del Producto encriptada |
