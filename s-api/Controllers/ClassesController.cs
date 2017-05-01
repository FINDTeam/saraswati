using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using s_api.Models;

namespace s_api.Controllers
{
    [Route("api/[controller]")]
    public class ClassesController : Controller
    {
        private SDBContext _SDBContext;

        public ClassesController(SDBContext SDBContext)
        {
            _SDBContext = SDBContext;
        }

        // GET api/Classes
        [HttpGet]
        public IEnumerable<Classes> Get()
        {
            return _SDBContext.Classes.ToList();
        }

        // GET api/Classes/5
        [HttpGet("{id}")]
        public Classes Get(int id)
        {
            return _SDBContext.Classes.Find(id);
        }

        // POST api/Classes
        [HttpPost]
        public Classes Post([FromBody]Classes value)
        {
            _SDBContext.Classes.Add(value);
            _SDBContext.SaveChanges();
            return value;
        }

        // PUT api/Classes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Classes value)
        {
            _SDBContext.Classes.Update(value);
             _SDBContext.SaveChanges();
        }

        // DELETE api/Classes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var entity = _SDBContext.Classes.First(c => c.Id == id); 
            _SDBContext.Classes.Remove(entity); 
            _SDBContext.SaveChanges(); 
        }
    }
}
