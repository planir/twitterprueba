<template>
    <div class="container">
        <notifications />

        <div class="navbar">
            <!-- Home button -->
            <router-link class="btn icon" to="/">
                <font-awesome-icon icon="home" fixed-width />
            </router-link>
            <!-- Search input -->
            <div class="search">
                <font-awesome-icon icon="search"/>
                <input type="text" placeholder="Buscador"/>
            </div>
            <!-- Home button -->
            <router-link class="btn icon logout" to="/login">
                <font-awesome-icon icon="sign-out-alt" fixed-width />
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        margin-top: 26px;

        > .navbar {
            display: flex;
            align-items: center;
            padding: 0 14px;
            height: 60px;
            border-radius: 20px;
            background: #e3f2fd;

            > .search {
                display: flex;
                height: 40px;
                background: white;
                border-radius: 6px;
                margin-left: 16px;
                overflow: hidden;
                flex: 1;
                align-items: center;

                > svg, input {
                    color: $color-500;
                }

                > svg {
                    margin: 0 15px;
                }

                > input {
                    outline: 0;
                    flex: 1;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    font-weight: 400;
                    font-size: 16px;
                    border: 0;
                }
            }

            > .btn {
                &.logout {
                    margin-left: 8px;
                }
            }
        }

        > .content {
            margin-top: 20px;
            flex: 1;
        }
    }
</style>