<template>
    <form @submit.prevent="dangki">
        <h1>Đăng kí đề tài</h1>
        <div class="mb-3">
            <label for="tensinhvien" class="form-label">Tên Sinh Viên</label>
            <input type="text" class="form-control" id="tensinhvien" v-model="tensinhvien">
        </div>
        <div class="mb-3">
            <label for="mssv" class="form-label">Mã Sinh Viên</label>
            <input type="text" class="form-control" id="mssv" v-model="mssv">
        </div>
        <div class="mb-3">
            <label class="form-label" for="">Chọn đề tài</label>
            <select class="form-select" aria-label="Default select example" v-model="detai">
                <option value="0" selected disabled hidden> Chọn đề tài</option>
                <option v-for="dt in this.dsDeTai" :key="dt.id" :value="dt.ten">{{dt.ten}}</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<script>
export default {
    name: 'DangKi',
    props: {
        sinhVien: Array,
        dsDeTai: Array
    },
    data() {
        return {
            tensinhvien: '',
            mssv: '',
            detai: ''
        }
    },
    methods: {
        dangki() {
            console.log(this.dsDeTai)
            if(this.detai === "0" || this.detai === "") {
                alert("Hãy Chọn đề tài")
                return
            }
            const sinhvien = {
                id: this.sinhVien.length + 1,
                ten: this.tensinhvien,
                mssv: this.mssv,
                deTai: this.detai
            }
            this.$emit('themSV', sinhvien)
            this.$router.back();
        }
    }
}
</script>

<style>

</style>