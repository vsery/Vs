<!--  -->
<template>
    <div class='vs-header-size'>
        vs-header-size
        <br>
        <el-dropdown placement="bottom" size="small" @command="handleChange">
            <el-button class="d2-mr btn-text can-hover" type="text"> <i class="el-icon-star-on"></i> </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="default">
                    <el-button @click="iconName('default')"> <i class="el-icon-share"></i>默认</el-button>
                </el-dropdown-item>
                <el-dropdown-item command="medium">
                    <el-button @click="iconName('medium')"> <i class="el-icon-share"></i>中</el-button>
                </el-dropdown-item>
                <el-dropdown-item command="small">
                    <el-button @click="iconName('small')"> <i class="el-icon-share"></i>小</el-button>
                </el-dropdown-item>
                <el-dropdown-item command="mini">
                    <el-button @click="iconName('mini')"> <i class="el-icon-share"></i>最小</el-button>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    name: 'vs-header-size',
    data() {
        return {}
    },
    computed: {
        ...mapState('VsAdmin', {
            count: state => state.count
        })
    },
    methods: {
        handleChange(value) {
            console.log(value);
            // this.sizeSet(value)
        },
        iconName(name) {
            console.log(name);
            return name
            // return name === this.value ? 'dot-circle-o' : 'circle-o'
        }
    },
    actions: {
        iconName(name) {
            console.log(name);
            return name
        }
    }
}

</script>
<style scoped></style>
