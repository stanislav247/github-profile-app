import React, { Component } from 'react';

const Navbar = ({submit , field , change}) => {

    return ( 
        <div>
            <div>
                    <nav className="navbar navbar-transparent">
                        <form className="form-inline" onSubmit={submit}>
                            <div className="input-group ">
                                <input
                                    className="form-control mr-sm-2 input-field"
                                    type="text"
                                    value={field}
                                    onChange={change}
                                    id="search"
                                    name="search"
                                    autocomplete="off"
                                    placeholder="Search a GitHub user"
                                />
                            </div>

                         <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
             </div>
            <br />
        </div>
     );

}
 
export default Navbar;