# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Vite Yu-Gi-Oh

## Creo repo

- clona la repo dentro cartella esercizi
- apro la cartella in vs code
- digitare:
  ```sh
    npm create vue@latest
  ``` 
  alla prima domanda sul nome del progetto mettere un punto ad indicare che il progetto è quello della cartella corrente

  alla seconda domanda 'pacckage-name' inserire il nome del progetto ovvero lo stesso nome della repo

  proseguire rspondndo sempre no

- digitare:
    ```sh
        npm install
    ```
- per controllare che tutto funziona far partire il server
    ```sh
        npm run dev
    ```
- per arrestare il server:
```sh
        ctrl + c
``` 
## Pulizia dello scaffolding

- Apro App.vue e cancello tutto e scrivo il mio codice in modalità 'options'
- Apro la cartella components e la svuoto
- Apro la cartella assets svuoto tutto tranne main.css
- Cancello tutto il contenuto del main.css e lo rinomino in main.scss
- creo in assets le cartelle images e styles
- sposto dentro la cartella styles main.scss
- aggiorno il path a main.scss in main.js
- aggiungo eventuale cartella immagini a public
- aggiungo dentro la cartella styles una cartella partials per i file partial scss (es. varibili, animazioni, mixins, ecc)e la importo nel file main.scss (@use './partials/variables' as *;)

##Installare dipendenze

```sh
        npm install sass
``` 

```sh
        npm install bootstrap axios 
``` 

- importo bootstrap dentro main.scss @import 'bootstrap/scss/bootstrap';

## Creazione componenti header e main
- creo file HeaderComponent.vue e lo importo nell'App.vue (stessa cosa per il file MainComponent.vue)

## Creazione file store.js per stato componenti 
- all'interno della cartella src creo una cartella data, con all'interno il file store.js
- file store.js importa {reactive} da vue