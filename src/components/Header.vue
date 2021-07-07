<template>
    <b-card class="mb-5" bg-variant="light">
        <b-nav pills>
            <li class="nav-item">
                <router-link class="nav-link" to="/" exact active-class="active">Главная</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/participants" active-class="active">Участники</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/profile" active-class="active">Профиль</router-link>
            </li>
        </b-nav>
    </b-card>
</template>

<script>
export default {
    name: "Header",
};
</script>
