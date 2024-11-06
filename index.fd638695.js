document.addEventListener("DOMContentLoaded",function(){var e=function(e,t){var n=document.createElement("div");n.className=t,n.setAttribute("data-qa","notification"),n.textContent=e,document.body.appendChild(n),setTimeout(function(){n.remove()},3e3)},t=document.querySelector("table"),n=!0,a=null;t.querySelectorAll("th").forEach(function(e){e.addEventListener("click",function(){var a=Array.from(e.parentNode.children).indexOf(e),o=Array.from(t.querySelectorAll("tbody tr"));o.sort(function(e,t){var o=e.children[a].textContent.trim(),r=t.children[a].textContent.trim();return n?o.localeCompare(r):r.localeCompare(o)}),n=!n,o.forEach(function(e){return t.querySelector("tbody").appendChild(e)})})}),t.querySelectorAll("tbody tr").forEach(function(e){e.addEventListener("click",function(){a&&a.classList.remove("active"),e.classList.add("active"),a=e})}),document.body.insertAdjacentHTML("beforeend",'\n    <form class="new-employee-form">\n      <label>Name: <input name="name" type="text" data-qa="name"></label>\n      <label>Position: <input name="position" type="text" data-qa="position"></label>\n      <label>Office:\n        <select name="office" data-qa="office">\n          <option value="Tokyo">Tokyo</option>\n          <option value="Singapore">Singapore</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label>Age: <input name="age" type="number" data-qa="age"></label>\n      <label>Salary: <input name="salary" type="number" data-qa="salary"></label>\n      <button type="submit">Save to table</button>\n    </form>\n  ');var o=document.querySelector(".new-employee-form");o.addEventListener("submit",function(n){n.preventDefault();var r=o.name.value.trim(),i=o.position.value.trim(),l=o.office.value,c=parseInt(o.age.value.trim(),10),d=parseFloat(o.salary.value.trim());if(r.length<4){e("Name must be at least 4 characters long","error");return}if(c<18||c>90){e("Age must be between 18 and 90","error");return}var u=document.createElement("tr");u.innerHTML="\n      <td>".concat(r,"</td>\n      <td>").concat(i,"</td>\n      <td>").concat(l,"</td>\n      <td>").concat(c,"</td>\n      <td>").concat(d.toFixed(2),"</td>\n    "),t.querySelector("tbody").appendChild(u),e("Employee added successfully","success"),u.addEventListener("click",function(){a&&a.classList.remove("active"),u.classList.add("active"),a=u})})});
//# sourceMappingURL=index.fd638695.js.map
