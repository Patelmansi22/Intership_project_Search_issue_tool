// import React from "react";
// // import "./styles.css";

// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "react-bootstrap-table2-paginator";

// export const productsGenerator = quantity => {
//   const items = [];
//   for (let i = 0; i < quantity; i++) {
//     items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
//   }
//   return items;
// };

// const products = productsGenerator(100);
// let data = [
//     {
//         name: "1",
//         price: "1"
//     },
//     {
//         name: "1",
//         price: "1"
//     },
//     {
//         name: "1",
//         price: "1"
//     },
//     {
//         name: "1",
//         price: "1"
//     },
//      {
//         name: "1",
//         price: "1"
//     },


// ]

// const columns = [
  
//   {
//     dataField: "name",
//     text: "Product Name",
//     sort: true
//   },
//   {
//     dataField: "price",
//     text: "Product Price"
//   }
  
// ];

// export default function Home2() {
//   return (
//     <div className="App">
//       <BootstrapTable
//         bootstrap4
//         keyField="id"
//         data={data}
//         columns={columns}
//         pagination={paginationFactory({ sizePerPage: 5 })}
//       />
//     </div>
//   );
// }


// <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
  
  
//   <div class="table-list-filters flex-auto d-flex min-width-0">
//     <div class="flex-auto d-none d-lg-block no-wrap">
//       {/* <Link to={`/issueDetails/:${data._id}`} >

//         <span className='edititem2' style={{ color: "#7CE2AD", fontSize: "15px" }}  ></span>
//       </Link> */}


//       <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite" style={{ marginTop: "-20px" }}>
//         <b class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame" style={{ fontSize: "16px" }}>
//           {/* {data?.status == "open" ?
//             <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
//               <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
//             </svg> :
//             <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
//               <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
//             </svg>

//           }
// */}
//           {tabledata.title}


//           {/* <span className={`bg-${data.status == "open" ? "success" : "danger"} text-light p-1 mx-2`} style={{ fontSize: "13px", }}>{data.status}</span> */}
//         </b>


//         <br></br>


//         {/* <p style={{ marginLeft: "15px" }}> {new Date(data.postDate).toLocaleString(
//           "en-US",
//           {
//             month: "short",
//             day: "2-digit",
//             year: "numeric",
//           }
//         )}
//         </p> */}
//       </div>

//     </div>

//     </div>
//           </div>