---
title: Configurando um pendrive bootável com o Ventoy no linux
date: 2023-10-02 14:26:00 -03:00
categories: [blogging,linux,utilitario]
tags: [blogging,ventoy,linux,usb]
---

- [O que é o Ventoy](#o-que-é-o-ventoy)
  - [Como baixar o Ventoy no Linux](#como-baixar-o-ventoy-no-linux)
  - [Como descompactar o Ventoy no Linux](#como-descompactar-o-ventoy-no-linux)
  - [Como identificar a unidade do sistema do pendrive](#como-identificar-a-unidade-do-sistema-do-pendrive)
  - [Instalando o Ventoy no pendrive escolhido](#instalando-o-ventoy-no-pendrive-escolhido)


# O que é o Ventoy

Ventoy é um substituto ao `rufus` do Windows.
Ele serve para tornar um pendrive bootável (utilizamos ele para instalar um S.O. (S.O.: Sistema Operacional)).
<br>
Ele atua diferente do rufus, o rufus instala apenas um sistema no pendrive, já o Ventoy permite o uso/instalação de vários sistemas por pendrive, sendo possível por ex. ter 3-4 ou mais sistemas no pendrive, só dependendo da capacidade de armazenamento do mesmo.

## Como baixar o Ventoy no Linux

Primeiro, baixe o arquivo mais atualizado no [site oficial](https://www.ventoy.net/en/download.html):

Ou baixe direto a versão linux:
```bash
wget https://sinalbr.dl.sourceforge.net/project/ventoy/v1.0.95/ventoy-1.0.95-linux.tar.gz
```

## Como descompactar o Ventoy no Linux
Acesse a pasta onde baixou o arquivo, e descompacte o mesmo (outras formas de descompactação também são bem-vindas)
```bash
tar xf ventoy-1.0.95-linux.tar.gz
```

Acesse a nova pasta gerada
```bash
cd ventoy-1.0.95
```

## Como identificar a unidade do sistema do pendrive
Localize a unidade do pendrive no sistema
```bash
fdisk -l
```

```bash
Output:
Disco /dev/sdc: 14,88 GiB, 15980298240 bytes, 31211520 setores
Disk model: Flash Disk      
Unidades: setor de 1 * 512 = 512 bytes
Tamanho de setor (lógico/físico): 512 bytes / 512 bytes
Tamanho E/S (mínimo/ótimo): 512 bytes / 512 bytes
Tipo de rótulo do disco: dos
Identificador do disco: 0x47c9a400
``````
No meu caso é o `/dev/sdc`.

## Instalando o Ventoy no pendrive escolhido
Agora que localizei, vou instalar o Ventoy nele:
> Lembrando que estou no diretório da pasta descompactada do Ventoy
```bash
./Ventoy2Disk.sh -i /dev/sdc
```

Ele irá avisar que todos os dados do dispositivo serão apagados, e pede sua confirmação.
Aperte `y` seguido de `Enter` para continuar.
```bash
Attention:
You will install Ventoy to /dev/sdc.
All the data on the disk /dev/sdc will be lost!!!

Continue? (y/n)
```

Ele pergunta uma segunda vez, aperte `y` seguido de `Enter` para continuar.
```bash
All the data on the disk /dev/sdc will be lost!!!
Double-check. Continue? (y/n)
```

```bash
Output:
Create partitions on /dev/sdc by parted in MBR style ...
Done
Wait for partitions ...
partition exist OK
create efi fat fs /dev/sdc2 ...
mkfs.fat 4.2 (2021-01-31)
success
Wait for partitions ...
/dev/sdc1 exist OK
/dev/sdc2 exist OK
partition exist OK
Format partition 1 /dev/sdc1 ...
mkexfatfs 1.3.0
Creating... done.
Flushing... done.
File system created successfully.
mkexfatfs success
writing data to disk ...
sync data ...
esp partition processing ...

Install Ventoy to /dev/sdc successfully finished.
```

Parabéns, a instalação ocorreu com sucesso!
<br>
Agora você só precisa copiar as ISOs de seus sistemas baixados e mandar direto pro pendrive, que na hora de instalar ele perguntará qual dos sistemas você deseja instalar.
