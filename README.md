Twitter Follow Card - Práctica con React

Este proyecto es una pequeña práctica que hice mientras aprendía React.
La idea es crear un componente parecido a las tarjetas de seguir usuarios de Twitter (X) usando props y componentes reutilizables.

Qué aprendí en este ejercicio

Cómo crear componentes en React

Cómo usar props para pasar información a un componente

Cómo mostrar datos dinámicos en JSX

Cómo reutilizar un mismo componente para varios usuarios

Cómo generar una URL dinámica para el avatar usando userName

Componente principal

El componente que creé se llama:

TwitterFollowCard

Este componente recibe tres props:

userName → nombre de usuario

name → nombre real

isFollowing → indica si ya seguimos a la persona

Ejemplo de uso:

<TwitterFollowCard 
  userName="midudev"
  name="Miguel Angel Duran"
  isFollowing={false}
/>

<TwitterFollowCard 
  userName="elonmusk"
  name="Elon Musk"
  isFollowing={true}
/>
Avatar dinámico

Para mostrar la foto de perfil uso la página unavatar.io, que permite generar el avatar a partir del username.

const avatarUrl = `https://unavatar.io/${userName}`
Objetivo de la práctica

El objetivo de este ejercicio fue entender mejor:

cómo funcionan los componentes reutilizables

cómo React renderiza información dinámica

cómo organizar mejor el código separando lógica y JSX

Nota

Este proyecto forma parte de mi proceso de aprendizaje en React, así que el código es simple y está pensado solo para practicar conceptos básicos.