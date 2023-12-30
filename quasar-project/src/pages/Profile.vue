<template>
    <q-page class="column flex-center text-white bg-black">
       <q-card flat class="bg-black" style="width: 100%; max-width: 700px;">
         <q-card-section class="text-center">
           <div class="text-h4">{{ profile.name }}</div>
           <div class="text-h6">{{ profile.title }}</div>
         </q-card-section>
   
         <q-card-section>
           <div class="text-h6">Followers</div>
           <div class="text-h5">{{ profile.followers }}</div>
           <div class="text-h6">Following</div>
           <div class="text-h5">{{ profile.following }}</div>
         </q-card-section>
   
         <q-card-section>
           <div class="text-h6">Arşivi gör</div>
           <div class="text-h5">{{ profile.archive }}</div>
         </q-card-section>
   
         <q-card-section>
           <div class="text-h6">ⓇETİKETLENENLER</div>
           <div class="text-h5">{{ profile.tags }}</div>
         </q-card-section>
   
         <q-card-section>
           <div class="text-h6">Fotoğraflar Paylaş</div>
           <div class="text-h5">{{ profile.images }}</div>
         </q-card-section>
   
         <q-card-actions>
           <q-btn color="white" text-color="black" label="İlk fotoğrafını paylaş" />
         </q-card-actions>
       </q-card>
    </q-page>
   </template>
   
   <script>
   export default {
    data() {
       return {
         profile: {
           name: "Your Name",
           title: "Your Title",
           followers: 17,
           following: 8,
           archive: "archive details",
           tags: "tags details",
           images: "images details",
         },
       };
    },
   };
   </script>
   
   <style>
   </style>