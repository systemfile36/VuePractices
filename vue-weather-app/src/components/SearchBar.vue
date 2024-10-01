<template>
    <div class="search-bar">
        <form>
            <div class="form-group">
                <input type="search" placeholder="enter the location"/>
                <button>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    </div>
</template>
<script setup>

</script>
<style lang="scss">
    .search-bar {
        padding: 8px 20px;
        border-radius: 40px;
        background: #fff;
        border: 1px solid #ccc;
        
        form {
            .form-group {
                display: flex;
                justify-content: center;
                
                input {
                    width: 100%;
                    border: none;
                    font-size: 16px;
                    outline: none;
                }

                button {
                    background: transparent;
                    border: none;
                    &:hover {
                        cursor: pointer;
                        outline: green solid 2px;
                    }
                }
            }
        }
    }
</style>