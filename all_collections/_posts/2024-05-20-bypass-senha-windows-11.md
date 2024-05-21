---
layout: post
title: Como não conectar ao Wifi durante a instalação do Windows 11
date: 2024-05-20 22:48:00 -03:00
categories: [utilitarios,linux]
---

Durante a instalação do Windows 11, ele nos obriga a conectar a alguma rede Wifi.

E isso por si só estaria tudo bem, se o mesmo não nos obrigasse logo depois a conectar com um email no sistema, e não nos dá opção de "não adicionar email agora", ou "não conectar na rede agora".

Inclusive a instalação sem a rede, é **muito** mais rápida, pois não ficam infinitas telas de "preparando o seu sistema".

## Como fazer

Durante a instalação, no momento que ele pedir para conectar a alguma rede wifi, tecle:

**SHIFT + F10**

Será aberta a janela do CMD, clique nela, e rode o seguinte comando:

`oobe\BypassNRO`

Após rodar o comando, a instalação será reiniciada, e aparecerá a nossa desejada opção "Não tenho rede."

Assim, marcando essa opção e seguindo com a instalação offline sem atrasos e chatisses.

Seja feliz.