import React, { Component } from 'react'
import Axios from axios
class Axios extends Component {
state={
    product:[]
}





  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <div className='container-fluid'>
            <div className='rows'>
                <div className='col-md-6'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Axios

