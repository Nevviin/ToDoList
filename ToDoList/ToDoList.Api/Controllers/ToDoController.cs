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
       private ToDoInMemoryContext _toDoInMemoryContext;
        public ToDoController(ToDoInMemoryContext toDoInMemoryContext)
        {
            _toDoInMemoryContext = toDoInMemoryContext;
        }

        [HttpGet]
        public ActionResult<List<ToDo>> GetTodoList()
        {

            var toDolist = _toDoInMemoryContext.ToDos.Select(x => x).ToList();
            return Ok(toDolist);
        }


        [HttpPost]
        public ActionResult<List<ToDo>> AddItem(ToDo toDo)
        {
            _toDoInMemoryContext.ToDos.Add(toDo);
            _toDoInMemoryContext.SaveChanges();
            var toDolist = _toDoInMemoryContext.ToDos.Select(x => x).ToList();
            return Ok(toDolist);
        }


        [HttpDelete]
        public ActionResult<List<ToDo>> Delete(int id)
        {
            var toDo = _toDoInMemoryContext.ToDos.Where(x => x.Id == id).FirstOrDefault();
            _toDoInMemoryContext.ToDos.Remove(toDo);
            _toDoInMemoryContext.SaveChanges();
            var toDolist = _toDoInMemoryContext.ToDos.Select(x => x).ToList();
            return Ok(toDolist);
        }
    }
}
