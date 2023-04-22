using hrPlatform.Models;
using hrPlatform.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace hrPlatform.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class CandidateSkillController : ControllerBase
    {
        private CandidateSkillService candidateSkillService;
        public CandidateSkillController(CandidateSkillService candidateSkillService)
        {
            this.candidateSkillService = candidateSkillService;
        }

        [HttpGet]
        public IEnumerable<CandidateSkill> Get()
        {
            return candidateSkillService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            return Ok(candidateSkillService.GetId(id));
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CandidateSkill cs)
        {
            return CreatedAtAction("Get", new { id = cs.Id }, candidateSkillService.Create(cs));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] CandidateSkill cs)
        {
            candidateSkillService.Update(id,cs);
            return Ok(candidateSkillService.GetId(id));
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            candidateSkillService.Delete(id);
            return NoContent();
        }

        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
