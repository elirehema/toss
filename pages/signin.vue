<template>
    <div class="grid grid-cols-8 md:grid-cols-8">
        <div class="sm:col-span-8 md:col-span-6 p-12 grid justify-items-center align-middle">
            <div class="font-bold text-7xl text-yellow-500">GoGas</div>
            <div class="font-light text-lg mt-7 text-gray-500">A small town need a full time and reliable gas supplier</div>
            <img  class="mt-8 w-120 h-150 object-cover" src="https://www.freeiconspng.com/thumbs/fire-png/cartoon-fire-flames-transparent-3.png" alt="Gas Banner"/>
            </div>
        
        <div class="sm:col-span-8 md:col-span-2 p-12 bg-gray-100 h-full  ">
            <h1 class="font-bold text-lg">Sign In Form</h1>
            <input v-model="request.email" class=" rounded-lg py-4 px-2 border border-1 border-green-200 hover:border-green-400 w-full " placeholder="Enter username"/>
            <input v-model="request.password" type="password" class=" rounded-lg py-4 px-2 border border-1 border-green-200 hover:border-green-400 w-full mt-8" placeholder="Password ***********"/>
       <div
          @click="authenticate"
          class="
            border-green-500
            md:border-2
            bg-green-500 hover:text-white
            ml-2 mt-12
            btn text-center text-white
            transition
            ease-out
            duration-500
          "
          >Sign Up</div
        >
       </div>
    </div>
</template>
<script>
    import axios from "@nuxtjs/axios"
export default {
    layout:"home",
    data(){
        return{
            request:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        authenticate(){
            console.log(this.request)
            this.$store.dispatch("_authenticate", this.request)
        }
    }
}
</script>>