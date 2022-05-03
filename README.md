
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
| `Data` | `string` | **Requerido**. Data del Producto |


#### Desencriptar Informacion

```http
  POST /payments/desencriptar
```

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `MerchantId` | `Int` | **Requerido**. Identificador de Vendedor |
| `PublicToken` | `string` | **Requerido**. Token generado para el Vendedor |
| `Data` | `string` | **Requerido**. Data del Producto encriptada |


#### Generar URL final para pagar

```http
  POST /payments/checkout
```

| Parametro | Tipo     | Descripcion                |
| :-------- | :------- | :------------------------- |
| `MerchantId` | `Int` | **Requerido**. Identificador de Vendedor |
| `Data` | `string` | **Requerido**. Data del Producto encriptada |

## Ejecutar localmente

Clona el proyecto

```bash
  git clone https://github.com/Designa-Studio/Payments-Uepapay-Services.git
```

Ve al directorio del proyecto

```bash
  cd Payments-Uepapay-Services
```

Instala sus dependencias

```bash
  npm install
```

Ejecuta el projecto

```bash
  npm run start
```

Ejecuta la version nodemon

```bash
  npm run dev
```

