using DAL.Bus;
using DAL.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace systems_data.Controllers
{
    public class RelationshipController : Controller
    {
        // GET: Relationship
        public ActionResult Index()
        {
            if (Session["UserID"] != null)
            {
                var list = RelationshipBus.GetListRelationship();
                ViewBag.lstRelationship = list;
                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
        }

        
        public JsonResult AddRelationship(Relationship fm)
        {
            var addP = RelationshipBus.InsertRelationship(fm);

            return Json(addP);
        }

        public JsonResult EditRelationship(string id)
        {
            var obj = RelationshipBus.getEditRelationship(id);
            var listPro = ProjectBus.GetProject();

            return Json(new { obj = obj, listPro = listPro });
        }

        
        public JsonResult UpdateRelationship(Relationship fm)
        {
            var obj = RelationshipBus.postEditRelationship(fm);

            return Json(obj);
        }

        
        public JsonResult DeleteRelationship(string id)
        {
            var obj = RelationshipBus.deleteRelationship(id);

            return Json(obj);
        }
    }
}