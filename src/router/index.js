import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home'
import ListSinhVien from '../components/ListSinhVien'
import DangKi from '../components/DangKiDeTai'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/khoa/:id',
    name: 'ChiTietKhoa',
    component: ListSinhVien
  },
  {
    path: '/dangki',
    name: 'DangKi',
    component: DangKi
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
