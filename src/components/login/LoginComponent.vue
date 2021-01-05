<template>
    <div class="login">
        <div class>
            <div class="col-md-4 offset-md-4">
                <h2 class="display-4 text-center mt-5">
                    Login Form
                </h2>
                <div class="alert alert-warning alert-dismissible fade show mt-4" role="alert" v-if="error">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="#">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" v-model="email" id="email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" v-model="password" id="password" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-info btn-block" @click.prevent="checkUser">Login</button>
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