---
title: Como criar atalhos scrcpy com fio/sem fio
date: 2024-05-20 09:50:00 -03:00
categories: [blogging,linux,utilitario]
tags: [blogging,ventoy,linux,scrcpy,atalhos]
---

![Print atalhos scrcpy](/assets/screenshots/atalhos-scrcpy.png)

## O que é o scrcpy

É um utilitário que espelha a tela de seu Android no computador, está disponível nas versões Windows e Linux.
Você pode conectar um ou vários tablets/smartphones ao mesmo tempo.

## Como utilizar

Requisitos:

- Ter o scrcpy devidamente instalado em seu computador
- Depuração USB ativada no dispositivo Android
- Cabo USB original

Instruções:

1. Conecte o cabo USB no dispositivo Android e no computador.
2. Abra o terminal e digite: `scrcpy`
3. Clique em ***Permitir*** quando aparecer a mensagem no celular: *Permitir utilizar depuração USB no computador*

## Instalar o scrcpy

### Versão padrão (sem atalhos)
Caso só precise usar o scrcpy diretamente do terminal, basta rodar:
```bash
sudo apt install -y scrcpy
```

### Versão mais atualizada (com atalhos)

Caso queira ter atalhos na Área de trabalho com fácil acesso, podendo conectar mais de um dispositivo ao mesmo tempo (tanto via USB, quanto sem fio) você deverá instalar a versão mais nova do scrcpy. Pois o package padrão normalmente vem desatualizado.

Instale as dependências:
```bash
sudo apt install -y ffmpeg libsdl2-2.0-0 adb wget \
                 gcc git pkg-config meson ninja-build libsdl2-dev \
                 libavcodec-dev libavdevice-dev libavformat-dev libavutil-dev \
                 libswresample-dev libusb-1.0-0 libusb-1.0-0-dev
```

Clone o repositório e rode o script de instalação:
```bash
git clone https://github.com/Genymobile/scrcpy
cd scrcpy
./install_release.sh
```

Caso precise atualizar o scrcpy com a mais nova versão:
```bash
cd scrcpy
git pull
./install_release.sh
```

Caso queira desinstalar:
```bash
sudo ninja -Cbuild-auto uninstall
```
## Criar os atalhos na Área de trabalho

Faça o git clone do seguinte repositório:
```bash
git clone https://github.com/maxxcleiton/scrcpy-documentation.git
```

Envie os 4 arquivos de dentro da pasta `/Atalhos`, para a sua Área de trabalho

Em cada um dos 4 arquivos (atalhos) faça o seguinte:

1. Clique com o botão direito do mouse no arquivo, e selecione ***Allow Launching (Permitir a execução)***;
   
2. (Opcional) Alterar imagem: Clique com o botão direito do mouse no arquivo, selecione ***Propriedades***, clique no ícone padrão e procure pela imagem respectiva na pasta que você fez o clone deste repositório, em `/Imagens`
   
   1. Nos atalhos com nome "**primeiro**": selecione a imagem "primeiro-dispositivo.png";
   
   2. Nos atalhos com nome "**adicionar**": selecione a imagem "adicionar-dispositivo.png";

Envie a pasta `/Scripts-scrcpy` para a sua home.

Agora só executar cada um dos atalhos disponíveis.

## Como utilizar o smartphone/tablet sem fio

1. Conecte o smartphone/tablet Android no computador via USB
2. Execute o atalho: Primeiro Dispositivo [Rede]
3. Quando abrir a tela, pode puxar o cabo e a tela continuará ativa

> Lembrar de conferir os requisitos no começo dessa documentação.

## Como espelhar mais de um smartphone/tablet ao mesmo tempo

1. Repita os passos de **Como utilizar o smartphone/tablet sem fio**;
2. Conecte outro dispositivo no computador
3. Execute o atalho: Adicionar Dispositivo [Rede]
> Espelhar mais de um dispositivo também serve para o método com fio

Fonte: https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md
