<template>
    <div>
        <table id="homeTable" class="table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tên Khoa</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="k in this.khoa" :key="k.id">
                    <td>{{k.id}}</td>
                    <td>{{k.ten}}</td>
                    <td>
                        <router-link :to="{name: 'ChiTietKhoa', params: {id:k.id}}" class="btn btn-primary btn-action">Chọn</router-link>
                        &nbsp;&nbsp;&nbsp;
                        <button @click="xemlich(k.id)" class="btn btn-danger btn-calender">Xem lịch bảo vệ</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Id</th>
                    <th>Tên Khoa</th>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Home',
    props: {
        khoa: Array
    },
    mounted() {
            $("#homeTable").DataTable({
                lengthMenu: [[3,5,10, -1], [3,5,10,'All']],
            });
    }, methods: {
        xemlich(id) {
            var kh = this.khoa.find(k => k.id === id)
            alert(kh.lichBV)
        }
    }
}
</script>

<style>
    .btn-action {
        border-radius: 10px;
        background: rgb(117, 117, 242) !important;
    }
    .btn-calender {
        border: none solid white !important;
        border-radius: 10px;
        background: rgb(215, 234, 91) !important;
    }
</style>