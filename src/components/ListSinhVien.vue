<template>
    <div>
        <h1>List sinh vien</h1>
        <br>
        <router-link :to="{name: 'DangKi'}" class="btn btn-primary"> Đăng kí đề tài </router-link>
        <br><br>
        <table id="tableSinhVien" class="table table-striped" style="width:100%">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Họ và Tên</th>
                    <th>Mã Sinh Viên</th>
                    <th>Đề Tài</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="sv in this.sinhVien" :key="sv.id">
                    <td>{{sv.id}}</td>
                    <td>{{sv.ten}}</td>
                    <td>{{sv.mssv}}</td>
                    <td>{{sv.deTai}}</td>
                    <td>
                        <button class="btn btn-primary btn-action" @click="chiTiet(sv.id)">Chi Tiết</button>
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
    name: 'ListSinhVien',
    props: {
        sinhVien: Array,
        dsDeTai: Array
    },
    methods: {
        chiTiet(id) {
            var sv = this.sinhVien.find(sv => sv.id === id);
            var tenDeTai = sv.deTai;
            var deTaiSV = this.dsDeTai.find(dt => dt.ten === tenDeTai)
            const chiTietsv = {
                sinhVien: sv.ten,
                mssv: sv.mssv,
                tenDeTai: tenDeTai,
                giaoVien: deTaiSV.giaoVien
            }
            alert("Tên Sinh viên : " + chiTietsv.sinhVien + "\nMã Sinh Viên : " + chiTietsv.mssv + "\nTên đề tài : " + chiTietsv.tenDeTai + "\nGiáo Viên : " + chiTietsv.giaoVien)
        }
    },
    mounted() {
        $('#tableSinhVien').DataTable({
            lengthMenu: [[3,5,10, -1], [3,5,10,'All']], 
        })

    }
}
</script>

<style scoped>
    .btn-action {
        border-radius: 10px;
        background: rgb(117, 117, 242) !important;
    }
</style>