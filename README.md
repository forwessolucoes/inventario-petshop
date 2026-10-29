# Inventario Pet Shop

Eu fiz este app para contar o estoque de um pet shop usando so o celular. Voce aponta a camera para o codigo de barras, o app conta item a item e, no fim, entrega uma planilha que abre no Excel.

- Funciona sem internet depois da primeira abertura.
- Os dados ficam no proprio aparelho. Sem servidor, sem conta, sem login.
- Instala como aplicativo no Android e no iPhone.
- A primeira contagem ja monta o cadastro de produtos.
- Serve com prateleira ou sem: dividir a loja em areas e opcional.

## Versoes

- Versao gratis (este repositorio): ate 50 produtos.
- Versao completa: sem limite de produtos e e envia o estoque contado para o atendimento automatico no WhatsApp. Contato: [Fale com a Forwes no WhatsApp: (27) 99296-7582](https://wa.me/5527992967582)

O formato dos dados e o mesmo nas duas. Para passar para a completa, exporte o backup aqui e importe la. Nada se perde.

## Como usar

1. Toque em "Nova contagem" e escolha a area (ou "Loja toda").
2. Aponte a camera para o codigo de barras. Se o codigo estiver amassado, use "Digitar codigo" ou "Buscar por nome".
3. Produto novo: digite o nome uma vez. Nas proximas leituras ele e reconhecido.
4. Saco aberto vendido por kg: marque "granel" no produto e some o peso em "Kg avulso".
5. Produto sem codigo: use "Produto sem codigo", depois imprima a etiqueta em "Etiquetas".
6. Terminou: "Finalizar contagem" e "Exportar planilha".
7. Faca o backup em "Backup" depois de cada contagem.

## Rodar no computador

A camera so funciona em `http://localhost` ou em `https`. Abrir o arquivo com duplo clique nao serve.

1. Abra um terminal dentro desta pasta.
2. Rode `python -m http.server 8765`.
3. Abra `http://localhost:8765/index.html`.
4. Para rodar a verificacao interna, abra `http://localhost:8765/index.html#autoteste`. Deve aparecer "AUTOTESTE OK".

## Publicar na Cloudflare (gratis)

1. Entre em dash.cloudflare.com.
2. Na pagina inicial, em "Ship something new", clique no quadro "Drop a folder, or a zip" e escolha esta pasta.
3. Confira a lista de arquivos e clique em Deploy.
4. A Cloudflare mostra o endereco do app (`<nome>.<sua-conta>.workers.dev`).
5. Abra o endereco no celular e instale.
6. Versao nova:
   - no `sw.js`, some 1 ao numero do cache (ex.: `inventario-v5` vira `inventario-v6`);
   - no painel, abra o app > Nova implantacao > escolha a pasta > Deploy;
   - no celular, abra o app com internet e feche e abra de novo para pegar a versao nova.

## Instalar no celular

- Android (Chrome): menu do navegador > Instalar app.
- iPhone (Safari, iOS 16.4 ou mais novo): Compartilhar > Adicionar a Tela de Inicio.
  - Use sempre o app instalado. O Safari apaga dados de sites que ficam 7 dias sem abrir.
  - O iPhone pede permissao da camera de novo a cada abertura do app instalado. Isso e do iOS.

## Arquivos de terceiros (SHA-256)

A pasta `vendor/` tem copias, sem alteracao, de duas bibliotecas. Confira se quiser:

- `vendor/barcode-detector-3.2.1-ponyfill.js` : `831600708895a36fe19303750dc0f1cd7bfc88e23351aec83d370e6b44308f1c`
- `vendor/zxing_reader-3.1.1.wasm` : `6a858c01e076bab3a1bd413e4f2cf5e5e45f819a0d9441d83c66993bc48ed38f`

No Windows (PowerShell): `Get-FileHash vendor\zxing_reader-3.1.1.wasm -Algorithm SHA256`

## Licenca

Codigo deste repositorio sob licenca MIT (arquivo `LICENSE`), copyright Forwes.

Bibliotecas de terceiros (licencas completas em `LICENCAS-DE-TERCEIROS.txt`):

- barcode-detector 3.2.1, de Ze-Zheng Wu (MIT).
- zxing-wasm 3.1.1, de Ze-Zheng Wu (MIT).
- zxing-cpp, compilado dentro do arquivo `.wasm` (Apache 2.0).
