import Swal from 'sweetalert2'

const alerts = {
  // templateReference(titulo, texto){
  //     Swal.fire({
  //         icon: 'success',
  //         title: titulo,
  //         text: texto,
  //         showConfirmButton: false,
  //         timer: 2500
  //       })
  // },
  success(title, text) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      color: '#fff',
      background: 'rgb(15, 16, 53)',
      backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `
    })
  },
  fail(title, text) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
      color: '#fff',
      background: '#CD104D',
      backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `
    })
  }
}

export default alerts
