#!/bin/bash

mkdir Guilherme

var1="Marcelo"
var2="Joao"
var3="Guilherme"

if ls $var1
then 
	echo "Diretorio $var1 encontrado"
elif ls $var2
then
	echo "Diretorio $var2 encotnrado"
elif ls $var3
then
	echo "Diretorio $var3 ecnotnrado"
else "Diretorio nao encontrado"

fi
