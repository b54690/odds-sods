export default function (state = [
    {
      id: 1,
      title: 'Handbag',
      price: 1450,
      description: 'Nearly new handbag',
      email: 'mike@gmail.com',
      phone: 79775664773
    },
  
    {
      id: 2,
      title: 'Shoes',
      price: 200,
      description: 'Nearly new shoes',
      email: 'mikey@gmail.com',
      phone: 79775667574
    }
  ], action) {
    switch (action.type) {
      default:
        return state
    }
  }

