using DAL.Bus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace systems_data.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (Session["UserID"] != null)
            {
                var id = Session["UserID"].ToString();
                var list = ProjectBus.GetProject();
                //var listR = RelationshipBus.GetListRelationship();
                var user = UserBus.GetUserById(id);


                ViewBag.lstProject = list;
                //ViewBag.lstRelationship = listR;
                ViewBag.companycode = user[0].COMPCODE;

                return View();
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
        }


    }
}