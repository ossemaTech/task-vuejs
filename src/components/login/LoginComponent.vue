<template>
    <div class="login">
        <div class>
            <div class="col-md-3 m-auto">
                <form action="#" class="form-login mt-5">
                    <div class="form-group">
                        <input 
                            type="email" 
                            placeholder="email" 
                            class="form-control" 
                            name="email" 
                            v-model="email" id="email" 
                        />
                    </div>
                    <div class="form-group">
                        <input 
                            type="password"
                            placeholder="password"
                            class="form-control" 
                            name="password" 
                            v-model="password" 
                            id="password" 
                        />
                    </div>
                    <span class="text-secondary d-block mb-2 text-center">sifremi Hatirlamiyorum</span>
                    <div class="form-group">
                        <button 
                            type="submit" 
                            class="btn btn-white text-black d-block m-auto btn-login rounded-pill" 
                            @click.prevent="checkUser"
                        >
                        <b-icon icon="arrow-right-short"></b-icon>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            islog : false
        }
    },

    methods: {
        checkUser() {
            return this.$store.commit("checkUser", {
                email: this.email,
                password: this.password
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .login {
        .form-login {
            margin-top: 100px;
            background-color: #efeded00;
            padding: 20px;
            -webkit-box-shadow: 1px 3px 13px 5px rgb(147, 147, 147);
            -moz-box-shadow: 1px 3px 13px 5px rgb(147, 147, 147);
            box-shadow: 1px 3px 13px 5px rgb(147, 147, 147);
            border-radius: 18px;

            input {
                border: 0;
                background: transparent;
                border-bottom: 1px solid #cccc;
            }

            .btn-login {
                border: 1px solid #ccc;
            }
        }
    }
</style>