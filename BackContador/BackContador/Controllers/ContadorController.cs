using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class ContadorController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContadorController(AppDbContext context)
    {
        _context = context;

        // Inicializar o contador no banco, se necessário
        if (!_context.Acessos.Any())
        {
            _context.Acessos.Add(new Acesso { Contador = 0 });
            _context.SaveChanges();
        }
    }

    [HttpGet]
    public IActionResult GetContador()
    {
        var acesso = _context.Acessos.First();
        return Ok(new { ContadorAtual = acesso.Contador });
    }

    [HttpPost]
    public IActionResult IncrementarContador()
    {
        var acesso = _context.Acessos.First();
        acesso.Contador++;
        _context.SaveChanges();
        return Ok(new { ContadorAtual = acesso.Contador });
    }
}