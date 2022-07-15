<template>
  <div class="container">
    <Navbar/>
    <br><br><br>
    <div class="main-content">
      <router-view :khoa="khoa" :sinhVien="sinhVien" :dsDeTai="dsDeTai" v-on:themSV="themSV"></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      khoa: [
        {
          id: 1,
          ten: 'Công nghệ thông tin',
          lichBV: '26/8/2022'
        },
        {
          id: 2,
          ten: 'Điện tử viễn thông',
          lichBV: '12/9/2022'
        },
        {
          id: 3,
          ten: 'An ninh mạng',
          lichBV: '31/1/2023'
        },
        {
          id: 4,
          ten: 'Cơ điện tử',
          lichBV: '12/5/2022'
        },
        {
          id: 5,
          ten: 'Khoa học máy tính',
          lichBV: '22/10/2022'
        },
        {
          id: 6,
          ten: 'Cơ khí',
          lichBV: '1/12/2022'
        },
        {
          id: 7,
          ten: 'Tự động hóa',
          lichBV: '3/8/2022'
        },
        {
          id: 8,
          ten: 'Truyền thông và quản trị',
          lichBV: '29/6/2022'
        },
        {
          id: 9,
          ten: 'Thiết kế',
          lichBV: '26/8/2022'
        },
        {
          id: 10,
          ten: 'Kiến trúc',
          lichBV: '26/8/2022'
        },
      ],
      sinhVien: [
        {
          id: 1,
          ten: 'Trần Đức Nam',
          mssv: '20172923',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 2,
          ten: 'Nguyễn Văn Tâm',
          mssv: '20171445',
          deTai: "Cơ Sở Dữ Liệu Bigdata"
        },
        {
          id: 3,
          ten: 'Lê Bảo Bình',
          mssv: '20172443',
          deTai: "Bảo mật dữ liệu ngân hàng"
        },
        {
          id: 4,
          ten: 'Lê Trung Kiên',
          mssv: '20171331',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 5,
          ten: 'Bùi Văn Chiến',
          mssv: '20171697',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 6,
          ten: 'Nguyễn Đức Bình',
          mssv: '20173459',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 7,
          ten: 'Vũ Văn Nghĩa',
          mssv: '20176447',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 8,
          ten: 'Trần Thị Hồng',
          mssv: '20171111',
          deTai: "Cơ Sở Dữ Liệu Bigdata"
        },
        {
          id: 9,
          ten: 'Lưu Diệc Phàm',
          mssv: '20176783',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
        {
          id: 10,
          ten: 'Cao Văn Đài',
          mssv: '20170123',
          deTai: "Ứng dụng Web quản lý sinh viên"
        },
      ],
      dsDeTai: [
        {
          id: 1,
          ten: "Ứng dụng Web quản lý sinh viên",
          giaoVien: "Bùi Thu Hà"
        },
        {
          id: 2,
          ten: "Bảo mật dữ liệu ngân hàng",
          giaoVien: "Trần Đức Đăng"
        },
        {
          id: 3,
          ten: "Ứng dụng Web check in điểm danh sinh viên",
          giaoVien: "Ngô Ngọc Hiếu"
        },
        {
          id: 4,
          ten: "Tối Ưu truy xuất Database",
          giaoVien: "Lưu Thị Oanh"
        },
        {
          id: 5,
          ten: "Cơ Sở Dữ Liệu Bigdata",
          giaoVien: "Vũ Văn Tùng"
        },
      ]

    }
  },
  methods: {
    themSV(sinhvien) {
      this.sinhVien.push(sinhvien)
    }
  }
}
</script>
<style scoped>
  .container {
    background: rgb(237, 235, 235) !important;
  }
  .main-content {
    padding: 30px;
    padding-bottom: 20px;
    border-radius: 15px;
    background: white;
  }
</style>
