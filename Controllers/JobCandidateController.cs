using hrPlatform.Models;
using hrPlatform.Services;
using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Threading.Tasks;

namespace hrPlatform.Controllers
{
    [Produces("application/json")]
    [ApiController]
    [Route("api/[controller]")]
    public class JobCandidateController : ControllerBase
    {
        private JobCandidateService jobCandidateService;
        public JobCandidateController(JobCandidateService JCS)
        {
            jobCandidateService = JCS;
        }
        [HttpGet]
        public IEnumerable<jobCandidate> Get()
        {
            return jobCandidateService.GetAll();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            return Ok(jobCandidateService.GetId(id));
        }

        [HttpGet("search/{prompt}")]
        public IEnumerable<jobCandidate> Get(string prompt)
        {
            return jobCandidateService.Search(prompt);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]jobCandidate jc)
        {
            return CreatedAtAction("Get", new { id = jc.Id }, jobCandidateService.Create(jc));
        }
        [HttpPost("addSkill/{candidateId}")]
        public async Task<ActionResult> Post(int candidateId, [FromBody]CandidateSkill cs)
        {
            return Ok(jobCandidateService.AddSkill(candidateId, cs));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody]jobCandidate jc)
        {
            jobCandidateService.Update(id, jc);
            return Ok(jobCandidateService.GetId(id));
            //return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            jobCandidateService.Delete(id);
            return NoContent();
        }

        public override NoContentResult NoContent()
        {
            return base.NoContent();
        }
    }
}
