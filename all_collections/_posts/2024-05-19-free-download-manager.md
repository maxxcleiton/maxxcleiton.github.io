---
layout: post
title: O melhor gerenciador de downloads do linux
date: 2024-05-19 21:24:00 -03:00
categories: [utilitarios,linux]
---

Apresento-lhes, o Free Download Manager

![FDM](/assets/screenshots/debian-downloads-fdm.png)

Ele tanto baixa arquivos `.torrent`, quanto arquivos normais

Muitas vezes vamos baixar alguns arquivos mais pesados pelo navegador, e a internet inventa de dar alguma queda aleatória, assim comprometendo nosso download que demorou 10 minutos para quase estar finalizado.

## Como instalar no Debian/Ubuntu

Baixe por [aqui](https://www.freedownloadmanager.org/pt/download-fdm-for-linux.html){:target="_blank"}

Após baixar, por se tratar de um arquivo `.deb`, se seu sistema tiver um gerenciador de instalação, você poderá dar dois cliques no arquivo.

Caso não possua um gerenciador de instalação:

Acesse o terminal do sistema.

Instale as dependências
```bash
sudo apt install ffmpeg libavdevice59
```

Acesse o diretório onde foi baixado o arquivo.

Nesse caso aqui está em ~/Downloads
```bash
cd ~/Downloads
```

Digite o comando dpkg -i
```bash
sudo dpkg -i freedownloadmanager.deb
```

Após isso, basta procurar pelo programa recém instalado em seu menu iniciar.

E seja feliz.

## Como adicionar um download no programa

No programa, existem três formas de adicionar downloads nele.

1. Extensão do FDM no navegador.
2. Arrastando a URL no programa.
3. Adicionando a URL manualmente.

## 1. Extensão do FDM no navegador

Com a extensão ativa em seu navegador, todo download que fizer, será jogado automaticamente para o Free Download Manager instalado em seu sistema.

Baixe a versão desejada:
- [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/free-download-manager-addon/){:target="_blank"}
- [Google Chrome](https://chrome.google.com/webstore/detail/free-download-manager-chr/ahmpjcflkgiildlgicmcieglgoilbfdp/RK%3D2/RS%3DfQzscgKGm9aMezJJ7Gf2Fcc.JSo-){:target="_blank"}

## 2. Arrastando a URL no programa

Todo link que aparece no navegador, pode ser arrastado.

Se você arrastar o link até o programa, ele será capturado e iniciado o download.

## 3. Adicionando a URL manualmente

Clique no + que fica na região superior esquerda do programa.

Será aberta uma janela, cole o URL nela, e clique em Ok.

![Add URL FDM](/assets/screenshots/adicao-url-fdm.png)

E então será exibido o tanto de espaço que será utilizado pelo arquivo de Download, e a escolha do diretório.

![Add URL FDM](/assets/screenshots/baixando-via-url-fdm.png)

Decida e seja feliz.