
// ver2 componentとpropsを利用
import React from 'react'

class InputData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      hobby: '',
      title: {
        name: '名前',
        age: '年齢',
        hobby: '趣味'
      }
    }
  }
  changeHandler (e) {
    this.props.onChange({
      name: e.target.name,
      target: e.target.value
    })
  }
  render () {
    return (
      <div>
        <h2>{ this.state.title.name }</h2>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
        <h2>{ this.state.title.age }</h2>
        <input
          name="age"
          type="number"
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
        <h2>{ this.state.title.hobby }</h2>
        <input
          name="hobby"
          type="text"
          onChange={(e) => {
            this.changeHandler(e)
          }}
        />
      </div>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      hobby: ''
    }
  }
  changeHandler (e) {
    let key = e.name
    this.setState({
      [key]: e.target
    })
  }
  submitHandler () {
    window.alert(JSON.stringify(this.state))
  }
  render () {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.submitHandler(e)
          }}
        >
          <InputData
             onChange={(e) => {
               this.changeHandler(e)
             }}
          />
          <p>
            <button>送信</button>
          </p>
        </form>
      </div>
    )
  }
}


// ver.1.0
// import React from 'react';
//
// export default class extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: '',
//       age: '',
//       hobby: ''
//     }
//   }
//   inputChange (e) {
//     let value = e.target.value
//     let key = e.target.name
//     this.setState({
//       [key]: value
//     })
//   }
//   inputClick (e) {
//     window.alert(JSON.stringify(this.state))
//   }
//   render () {
//     return (
//       <div>
//         <form onSubmit={(e) => {
//           this.inputClick(e)
//         }}>
//           <p>名前</p>
//           <input
//             name="name"
//             type="text"
//             onChange={(e) => {
//               this.inputChange(e)
//             }}
//           />
//           <p>年齢</p>
//           <input
//             name="age"
//             type="number"
//             onChange={(e) => {
//               this.inputChange(e)
//             }}
//           />
//           <p>趣味</p>
//           <input
//             name="hobby"
//             type="text"
//             onChange={(e) => {
//               this.inputChange(e)
//             }}
//           />
//           <p>
//             <input type="submit" value="送信"/>
//           </p>
//         </form>
//       </div>
//     )
//   }
// }