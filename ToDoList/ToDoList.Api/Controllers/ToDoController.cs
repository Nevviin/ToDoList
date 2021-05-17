using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Api.Models;

namespace ToDoList.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        public ToDoController()
        {

        }

        [HttpGet]
        public ActionResult<List<ToDo>> GetTodoList()
        {

          var toDoList =  new List<ToDo> { new ToDo 
            { CreatedDate = DateTime.Today,
                Id = 1, 
                IsCompleted = false, 
                Item = "Weekend Trekking" }
            };
            return Ok(toDoList);
        }



        [HttpPost]
        public ActionResult<List<ToDo>> AddItem(ToDo toDo)
        {
            var toDoList = new List<ToDo> { new ToDo
            { CreatedDate = DateTime.Today,
                Id = 1,
                IsCompleted = false,
                Item = "Weekend Trekking" }
            };
            return Ok(toDoList);
        }
    }
}
