using backDisersoft.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backDisersoft.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PreventivoController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public PreventivoController(AplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/<PreventivoController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {

                var listComentarios = await _context.Preventico.ToListAsync();

                return Ok(listComentarios);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // GET api/<PreventivoController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var preventivo = await _context.Preventico.FindAsync(id);

                if(preventivo == null)
                {
                    return NotFound();
                }

                return Ok(preventivo);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // POST api/<PreventivoController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Preventico preventivo)
        {
            try
            {

                _context.Add(preventivo);
                await _context.SaveChangesAsync();

                return Ok(preventivo);

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<PreventivoController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Preventico preventivo)
        {
            try
            {
                if(id != preventivo.Id)
                {
                    return BadRequest();
                }

                _context.Update(preventivo);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Mantenimiento actualizado con exito!"});

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<PreventivoController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var preventivo = await _context.Preventico.FindAsync(id);

                if(preventivo == null)
                {
                    return NotFound();
                }

                _context.Preventico.Remove(preventivo);
                await _context.SaveChangesAsync();
                return Ok(new { message = "Mantenimiento eliminado con exito!" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
