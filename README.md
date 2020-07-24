# react-native-signature
A Component to collect and return a signature

## Install
add in package.json:
```bash
"react-native-signature": "git+https://libs:ofImhksJ@git.codificar.com.br/react-components/react-native-signature.git",
```
## Exemplo

![Print de um exemplo](./example.png "Exemplo")

## Usage

```javascript

import GenericComponent from "react-native-generic";

<SignatureComponent
    titleText="Assine Aki"
    cleanButtonText="Limpar"
    signButtonText="Assinar"
    buttonsCollor="#1F0808"
        
    orientation="landscape"
    onColletSignature={data => this.saveSignature(data)}
/>

```
## Recive onColletSignature

```javascript

function saveSignature(data) {   
    console.log("Signature", data)
}

```

## Event Response Format

```javascript

{
  "type": "image/png",
  "name": "/storage/emulated/0/saved_signature/signature.png",
  "uri": "file:///storage/emulated/0/DCIM/123signatureexample.png"
}

```

## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| titleText | '' | `string` | Title centered on the screen|
| cleanButtonText | - | `string` | Button text that clears the signature |
| signButtonText | - | `string` | Button text that save the signature |
| buttonsCollor | '' | `string` | Button Background color|
| orientation | - | `landscape or portrait` | screen orientation |
| onColletSignature | - | `function` | function to recive signature image |