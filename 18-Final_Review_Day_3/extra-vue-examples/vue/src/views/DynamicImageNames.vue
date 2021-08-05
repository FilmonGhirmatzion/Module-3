<template>
  <div id="dynamicImages">
      <h1>Dynamic Image Names (require)</h1>
      <p>When images name are created dynamically using variables they may not be found even if they are in the asset folder.  
          When WebPack creates the Vue package it only includes images that hardcoded in the template. 
          To dynamically create an image name the require() method must be used to tell WebPack to include all
          images that could possibly match the criteria in the package.  
      </p>
    
    <div class="buttons">
        <p>Select an Image to Display:</p>
        <div>
        <button @click="imageName = 'one'">One</button>
        <button @click="imageName = 'two'">Two</button>
        <button @click="imageName = 'three'">Three</button>
        </div>
    </div>
    <div>
        <img :src="require('../assets/img/' + imageName + '.jpg')" />
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imageName: 'zero'
        }
    }
}
</script>

<style>
#dynamicImages {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
#dynamicImages img {
    width: 800px;
}
#dynamicImages div.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
#dynamicImages div.buttons p {
    font-size: 1.5rem;
}
#dynamicImages div.buttons div {
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 50px;
}
#dynamicImages div.buttons div button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    background-color: lightblue;
    font-size: 1.2rem;
    font-weight: 600;
}
#dynamicImages div.buttons div button:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>