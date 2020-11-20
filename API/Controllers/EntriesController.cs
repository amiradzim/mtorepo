using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class EntriesController : BaseApiController
    {
        private readonly DataContext _context;
        public EntriesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<MtoEntry>>> GetEntries()
        {
            return await _context.Entries.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MtoEntry>> GetEntry(int id)
        {
            return await _context.Entries.FindAsync(id);
        }

        [HttpGet("select-all")]
          public async Task<ActionResult<List<MtoEntry>>> SelectAll()
        {
            return await _context.Entries.ToListAsync();
        }

        // [HttpGet("filter-select")]
    }
}