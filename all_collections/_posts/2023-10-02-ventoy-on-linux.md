---
title: Configurando um pendrive bootável com o Ventoy no linux
date: 2023-10-02 14:26:00 -03:00
categories: [blogging,linux,utilitario]
tags: [blogging,ventoy,linux,usb]
---

# O que é o Ventoy

Ventoy é um substituto ao `rufus` do Windows.

Ele serve para tornar um pendrive bootável (utilizamos ele para instalar um SO).

> SO: Sistema Operacional

Ele atua diferente do rufus, o rufus instala apenas um sistema no pendrive, já o Ventoy permite o uso/instalação de vários sistemas por pendrive, sendo possível por ex. ter 3-4 ou mais sistemas no pendrive, só dependendo da capacidade de armazenamento do mesmo.

## Como baixar o Ventoy no Linux

Primeiro, baixe o arquivo mais atualizado no [site oficial](https://www.ventoy.net/en/download.html):

Ou baixe direto a versão linux:

```bash
wget https://tenet.dl.sourceforge.net/project/ventoy/v1.0.98/ventoy-1.0.98-linux.tar.gz?viasf=1
```

## Como descompactar o Ventoy no Linux

Acesse a pasta onde baixou o arquivo, e descompacte o mesmo (outras formas de descompactação também são bem-vindas)

```bash
tar xf ventoy-1.0.98-linux.tar.gz
```

Acesse a nova pasta gerada

```bash
cd ventoy-1.0.98
```

Execute o Ventoy

```bash
./VentoyGUI.x86_64
```

> Coloque a senha de super administrador se for requisitada.

O Ventoy será iniciado.

E então plugue no computador, o seu PENDRIVE USB.

Após isso, clique no botão de **refresh**.

Seu PENDRIVE deverá aparecer na lista, e então clique em ***Install***.

Após isso, seu pendrive estará bootável e pronto para ser utilizado.

## Como utilizar

Você deverá mover alguma distro em formato `.iso` para dentro do pendrive.

Após aguardar o tempo necessário para a cópia, o pendrive estará pronto para uso.

Quando bootar o pendrive na inicialização do sistema, ele perguntará qual dos sistemas (arquivos `.iso` que você colocou) deseja instalar.
