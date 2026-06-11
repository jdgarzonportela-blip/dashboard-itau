import { useState, useMemo } from "react";

const CONSUMO_DATA = [{"id": 4333, "entidad": "", "pais": "102", "rating": "A+", "disponibles": {"Trade & Garantías": 3000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 4275, "entidad": "", "pais": "102", "rating": "A", "disponibles": {"Trade & Garantías": 46437394.72, "Gestão de Caixa": 9773795.7, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 56211190.42}, {"id": 4276, "entidad": "", "pais": "102", "rating": "A-", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 14928412.04, "Derivativos": 9984760.17, "Bonds": 0.0}, "totalDisponible": 46913172.21}, {"id": 4264, "entidad": "", "pais": "102", "rating": "A+", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 4350, "entidad": "", "pais": "102", "rating": "A+", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 4274, "entidad": "", "pais": "102", "rating": "A+", "disponibles": {"Trade & Garantías": 3000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 4210, "entidad": "", "pais": "104", "rating": "BB+", "disponibles": {"Trade & Garantías": 432082.81, "Gestão de Caixa": 99949.0, "Derivativos": 19234854.55, "Bonds": 0.0}, "totalDisponible": 19766886.36}, {"id": 4291, "entidad": "", "pais": "104", "rating": "BB", "disponibles": {"Trade & Garantías": 15000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 15000000.0}, {"id": 4344, "entidad": "", "pais": "104", "rating": "BB", "disponibles": {"Trade & Garantías": 7500000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 7500000.0}, {"id": 4259, "entidad": "", "pais": "104", "rating": "BB", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 6000000.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 6000000.0}, {"id": 4292, "entidad": "", "pais": "104", "rating": "BB", "disponibles": {"Trade & Garantías": 14430000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 14430000.0}, {"id": 4379, "entidad": "", "pais": "111", "rating": "Revisar", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 485, "entidad": "", "pais": "105", "rating": "A+", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 2992993.99, "Derivativos": 2000000.0, "Bonds": 0.0}, "totalDisponible": 29992993.99}, {"id": 3470, "entidad": "", "pais": "105", "rating": "A+", "disponibles": {"Trade & Garantías": 0, "Gestão de Caixa": 30000000.0, "Derivativos": 4854475.18, "Bonds": 0.0}, "totalDisponible": 59854475.18}, {"id": 2996, "entidad": "", "pais": "105", "rating": "AA-", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 351, "entidad": "", "pais": "106", "rating": "BBB+", "disponibles": {"Trade & Garantías": 1250000.0, "Gestão de Caixa": 693072.19, "Derivativos": 500000.0, "Bonds": 0.0}, "totalDisponible": 2443072.19}, {"id": 4200, "entidad": "", "pais": "106", "rating": "A", "disponibles": {"Trade & Garantías": 9950000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 9950000.0}, {"id": 4248, "entidad": "", "pais": "106", "rating": "A-", "disponibles": {"Trade & Garantías": 6000000.0, "Gestão de Caixa": 10000000.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 16000000.0}, {"id": 4427, "entidad": "", "pais": "106", "rating": "A-", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 0.0}, {"id": 4290, "entidad": "", "pais": "106", "rating": "A", "disponibles": {"Trade & Garantías": 6892174.97, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 6892174.97}, {"id": 4271, "entidad": "", "pais": "107", "rating": "A", "disponibles": {"Trade & Garantías": 5000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 5000000.0}, {"id": 4341, "entidad": "", "pais": "109", "rating": "A", "disponibles": {"Trade & Garantías": 1500000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1500000.0}, {"id": 4362, "entidad": "", "pais": "Emiratos Arabes Unidos", "rating": "A+", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 20000000.0}, {"id": 4277, "entidad": "", "pais": "110", "rating": "BBB", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 4251, "entidad": "", "pais": "110", "rating": "BBB+", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 4227, "entidad": "", "pais": "110", "rating": "A", "disponibles": {"Trade & Garantías": 22000000.0, "Gestão de Caixa": 8791301.58, "Derivativos": 11993111.94, "Bonds": 0.0}, "totalDisponible": 42784413.52}, {"id": 4246, "entidad": "", "pais": "110", "rating": "A-", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 4216, "entidad": "", "pais": "110", "rating": "A-", "disponibles": {"Trade & Garantías": 15713101.67, "Gestão de Caixa": 5000000.0, "Derivativos": 9966090.92, "Bonds": 0.0}, "totalDisponible": 30679192.59}, {"id": 4254, "entidad": "", "pais": "110", "rating": "A-", "disponibles": {"Trade & Garantías": 14602230.0, "Gestão de Caixa": 12000000.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 28476376.63}, {"id": 4357, "entidad": "", "pais": "111", "rating": "Sin Calificación", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 488282.9, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 488282.9}, {"id": 4282, "entidad": "", "pais": "111", "rating": "A-", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 5740682.4, "Derivativos": 25648549.04, "Bonds": 0.0}, "totalDisponible": 33389231.44}, {"id": 4222, "entidad": "", "pais": "111", "rating": "A+", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 18289317.38, "Derivativos": 11420728.07, "Bonds": 0.0}, "totalDisponible": 32710045.45}, {"id": 4256, "entidad": "", "pais": "111", "rating": "A+", "disponibles": {"Trade & Garantías": 40000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 40000000.0}, {"id": 111, "entidad": "", "pais": "111", "rating": "A+", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 35508401.33, "Bonds": 0.0}, "totalDisponible": 37508401.33}, {"id": 348, "entidad": "", "pais": "111", "rating": "A+", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 5000000.0, "Bonds": 0.0}, "totalDisponible": 7000000.0}, {"id": 4340, "entidad": "", "pais": "111", "rating": "AAA", "disponibles": {"Trade & Garantías": 5000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 5000000.0}, {"id": 4258, "entidad": "", "pais": "111", "rating": "A1", "disponibles": {"Trade & Garantías": 6500000.0, "Gestão de Caixa": 15332708.88, "Derivativos": 16922189.92, "Bonds": 0.0}, "totalDisponible": 39754898.8}, {"id": 50722, "entidad": "", "pais": "111", "rating": "A-", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 31930380.14, "Bonds": 0.0}, "totalDisponible": 34930380.14}, {"id": 4056, "entidad": "", "pais": "111", "rating": "AA-", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 56256732.93, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 57256732.93}, {"id": 363, "entidad": "", "pais": "111", "rating": "A+", "disponibles": {"Trade & Garantías": 4000000.0, "Gestão de Caixa": 34308552.8, "Derivativos": 2181585.52, "Bonds": 0.0}, "totalDisponible": 41490138.32}, {"id": 4376, "entidad": "", "pais": "111", "rating": "Sin Calificación", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 8959210.38, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 8959210.38}, {"id": 4379, "entidad": "", "pais": "111", "rating": "Revisar", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 4348, "entidad": "", "pais": "111", "rating": "Revisar", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 0.0}, {"id": 3442, "entidad": "", "pais": "112", "rating": "A+", "disponibles": {"Trade & Garantías": 10000000.0, "Gestão de Caixa": 0.0, "Derivativos": 52684311.47, "Bonds": 0.0}, "totalDisponible": 64684311.47}, {"id": 884, "entidad": "", "pais": "112", "rating": "A", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 10000000.0, "Derivativos": 22455531.85, "Bonds": 0.0}, "totalDisponible": 54455531.85}, {"id": 528, "entidad": "", "pais": "112", "rating": "A-", "disponibles": {"Trade & Garantías": 13351000.0, "Gestão de Caixa": 0.0, "Derivativos": 8000000.0, "Bonds": 0.0}, "totalDisponible": 23351000.0}, {"id": 4306, "entidad": "", "pais": "113", "rating": "A3", "disponibles": {"Trade & Garantías": 2588638.2, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2588638.2}, {"id": 3424, "entidad": "", "pais": "113", "rating": "A+", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 6285876.63, "Derivativos": 4510687.42, "Bonds": 0.0}, "totalDisponible": 10796564.05}, {"id": 2997, "entidad": "", "pais": "113", "rating": "A+", "disponibles": {"Trade & Garantías": 5000000.0, "Gestão de Caixa": 0.0, "Derivativos": 5000000.0, "Bonds": 0.0}, "totalDisponible": 10000000.0}, {"id": 4323, "entidad": "", "pais": "113", "rating": "A+", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 4165, "entidad": "", "pais": "113", "rating": "A+", "disponibles": {"Trade & Garantías": 5000000.0, "Gestão de Caixa": 34523331.2, "Derivativos": 7000000.0, "Bonds": 0.0}, "totalDisponible": 46523331.2}, {"id": 4342, "entidad": "", "pais": "115", "rating": "A", "disponibles": {"Trade & Garantías": 5000000.0, "Gestão de Caixa": 0.0, "Derivativos": 5000000.0, "Bonds": 0.0}, "totalDisponible": 10000000.0}, {"id": 4253, "entidad": "", "pais": "115", "rating": "A", "disponibles": {"Trade & Garantías": 3000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 4245, "entidad": "", "pais": "115", "rating": "A", "disponibles": {"Trade & Garantías": 3000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 3000000.0}, {"id": 4281, "entidad": "", "pais": "116", "rating": "BBB", "disponibles": {"Trade & Garantías": 2000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2000000.0}, {"id": 4269, "entidad": "", "pais": "119", "rating": "A+", "disponibles": {"Trade & Garantías": 30000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 30000000.0}, {"id": 522, "entidad": "", "pais": "117", "rating": "AAA", "disponibles": {"Trade & Garantías": 1472000.0, "Gestão de Caixa": 12983820.83, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 14455820.83}, {"id": 4289, "entidad": "", "pais": "117", "rating": "BBB-", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 4261, "entidad": "", "pais": "117", "rating": "BBB", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 5000000.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 5000000.0}, {"id": 4214, "entidad": "", "pais": "120", "rating": "BBB-", "disponibles": {"Trade & Garantías": 2500000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 2500000.0}, {"id": 4278, "entidad": "", "pais": "120", "rating": "BBB-", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 1000000.0, "Derivativos": 0.0, "Bonds": 2000000.0}, "totalDisponible": 5000000.0}, {"id": 4252, "entidad": "", "pais": "120", "rating": "BBB-", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 4347, "entidad": "", "pais": "121", "rating": "A", "disponibles": {"Trade & Garantías": 700000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 700000.0}, {"id": 4367, "entidad": "", "pais": "122", "rating": "AA-", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 20000000.0}, {"id": 4265, "entidad": "", "pais": "123", "rating": "Baa3", "disponibles": {"Trade & Garantías": 20000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 20000000.0}, {"id": 4297, "entidad": "", "pais": "124", "rating": "A+", "disponibles": {"Trade & Garantías": 500000.0, "Gestão de Caixa": 4755536.37, "Derivativos": 3000000.0, "Bonds": 0.0}, "totalDisponible": 9255536.37}, {"id": 4308, "entidad": "", "pais": "125", "rating": "Baa3", "disponibles": {"Trade & Garantías": 8350000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 8350000.0}, {"id": 4358, "entidad": "", "pais": "111", "rating": "Sin Calificación", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 10000000.0}, {"id": 4280, "entidad": "", "pais": "116", "rating": "BBB", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 9, "entidad": "", "pais": "111", "rating": "A", "disponibles": {"Trade & Garantías": 1000000.0, "Gestão de Caixa": 0.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 1000000.0}, {"id": 4395, "entidad": "", "pais": "103", "rating": "Baa2", "disponibles": {"Trade & Garantías": 0.0, "Gestão de Caixa": 5000.0, "Derivativos": 0.0, "Bonds": 0.0}, "totalDisponible": 5000.0}];
const RIESGO_DATA_RAW = {"101": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "102": [{"linea": "1. Operações com empresas", "limite": 10.0, "consumo": 0.0, "disponible": 10.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 10.0, "consumo": 0.0, "disponible": 10.0}, {"linea": "2. Gestão de Caixa", "limite": 40.0, "consumo": 10.81096103, "disponible": 29.18903897}, {"linea": "3. Derivativos", "limite": 15.0, "consumo": 0.015239827449213926, "disponible": 14.984760172550786}, {"linea": "4. Trade & Garantias", "limite": 60.0, "consumo": 8.562605277933745, "disponible": 51.43739472206626}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 125.0, "consumo": 19.388806135382957, "disponible": 105.61119386461704}, {"linea": "1. Soberano Offshore (b)", "limite": 20.0, "consumo": 13.9788, "disponible": 6.0212}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 20.0, "consumo": 13.9788, "disponible": 6.0212}], "103": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.5, "consumo": 0.0, "disponible": 0.5}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 0.5, "consumo": 0.0, "disponible": 0.5}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "104": [{"linea": "1. Operações com empresas", "limite": 33.0, "consumo": 0.0, "disponible": 33.0}, {"linea": "1.1.Risco Direto", "limite": 3.0, "consumo": 0.0, "disponible": 3.0}, {"linea": "1.2.Via Garantias", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}, {"linea": "2. Gestão de Caixa", "limite": 185.0, "consumo": 20.0, "disponible": 165.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 10.0, "consumo": 0.0, "disponible": 10.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}, {"linea": "6. Intragrupo", "limite": 80.0, "consumo": 12.783113640886414, "disponible": 67.21688635911357}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 30.0, "consumo": 5.1e-05, "disponible": 29.999949}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 20.0, "consumo": 4.017917190000001, "disponible": 15.982082809999998}, {"linea": "6.3.Derivativos Intragrupo", "limite": 30.0, "consumo": 8.765145450886413, "disponible": 21.234854549113585}, {"linea": "Total Transferência", "limite": 338.0, "consumo": 32.78311364088641, "disponible": 305.2168863591136}, {"linea": "1. Soberano Offshore (b)", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}], "105": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 90.0, "consumo": 22.216763020000002, "disponible": 67.78323698}, {"linea": "3. Derivativos", "limite": 15.0, "consumo": 5.145524817658899, "disponible": 9.854475182341101}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 125.0, "consumo": 27.3622878376589, "disponible": 97.6377121623411}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "106": [{"linea": "1. Operações com empresas", "limite": 109.0, "consumo": 0.0, "disponible": 109.0}, {"linea": "1.1.Risco Direto", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "1.2.Via Garantias", "limite": 89.0, "consumo": 0.0, "disponible": 89.0}, {"linea": "2. Gestão de Caixa", "limite": 10.0, "consumo": 0.0, "disponible": 10.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 91.0, "consumo": 81.65782502882088, "disponible": 9.34217497117912}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 93.0, "consumo": 10.759788449999999, "disponible": 82.24021155}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 60.0, "consumo": 9.009788449999999, "disponible": 50.99021155}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 30.0, "consumo": 1.75, "disponible": 28.25}, {"linea": "6.3.Derivativos Intragrupo", "limite": 3.0, "consumo": 0.0, "disponible": 3.0}, {"linea": "Total Transferência", "limite": 303.0, "consumo": 92.41761347882088, "disponible": 210.5823865211791}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "108": [{"linea": "1. Operações com empresas", "limite": 350.0, "consumo": 298.42067156610017, "disponible": 51.57932843389983}, {"linea": "1.1.Risco Direto", "limite": 350.0, "consumo": 298.42067156610017, "disponible": 51.57932843389983}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 40.0, "consumo": 0.0, "disponible": 40.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 90.0, "consumo": 0.0, "disponible": 90.0}, {"linea": "6. Intragrupo", "limite": 66.0, "consumo": 20.0, "disponible": 46.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 64.0, "consumo": 20.0, "disponible": 44.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 2.0, "consumo": 0.0, "disponible": 2.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 566.0, "consumo": 318.42067156610017, "disponible": 247.57932843389983}, {"linea": "1. Soberano Offshore (b)", "limite": 200.0, "consumo": 92.5, "disponible": 107.5}, {"linea": "2. Soberano Local (c)", "limite": 1700.0, "consumo": 1449.9267554744529, "disponible": 250.07324452554712}, {"linea": "Total Soberano", "limite": 1900.0, "consumo": 1542.4267554744529, "disponible": 357.5732445255471}], "109": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 1.5, "consumo": 0.0, "disponible": 1.5}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 1.5, "consumo": 0.0, "disponible": 1.5}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "107": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "110": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 50.0, "consumo": 2.77006737, "disponible": 47.22993263}, {"linea": "3. Derivativos", "limite": 30.0, "consumo": 0.040797139124115665, "disponible": 29.959202860875884}, {"linea": "4. Trade & Garantias", "limite": 160.0, "consumo": 84.2465387380043, "disponible": 75.7534612619957}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 240.0, "consumo": 87.05740324712842, "disponible": 152.94259675287157}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "111": [{"linea": "1. Operações com empresas", "limite": 21.0, "consumo": 9.394071480000001, "disponible": 11.605928519999999}, {"linea": "1.1.Risco Direto", "limite": 9.0, "consumo": 9.394071480000001, "disponible": -0.3940714800000009}, {"linea": "1.2.Via Garantias", "limite": 12.0, "consumo": 0.0, "disponible": 12.0}, {"linea": "2. Gestão de Caixa", "limite": 631.0, "consumo": 332.78807680999995, "disponible": 298.21192319000005}, {"linea": "3. Derivativos", "limite": 165.0, "consumo": 31.38816598153634, "disponible": 133.61183401846367}, {"linea": "4. Trade & Garantias", "limite": 66.0, "consumo": 2.5, "disponible": 63.5}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 1.0, "consumo": 0.55, "disponible": 0.44999999999999996}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 1.0, "consumo": 0.55, "disponible": 0.44999999999999996}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 884.0, "consumo": 376.6203142715363, "disponible": 507.3796857284637}, {"linea": "1. Soberano Offshore (b)", "limite": 120.0, "consumo": 114.272, "disponible": 5.727999999999994}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 120.0, "consumo": 114.272, "disponible": 5.727999999999994}], "112": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 50.0, "consumo": 0.0, "disponible": 50.0}, {"linea": "3. Derivativos", "limite": 80.0, "consumo": 6.860156686303762, "disponible": 73.13984331369623}, {"linea": "4. Trade & Garantias", "limite": 70.0, "consumo": 11.649, "disponible": 58.351}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 200.0, "consumo": 18.50915668630376, "disponible": 181.49084331369625}, {"linea": "1. Soberano Offshore (b)", "limite": 20.0, "consumo": 13.9788, "disponible": 6.0212}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 20.0, "consumo": 13.9788, "disponible": 6.0212}], "113": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 80.0, "consumo": 22.21993778, "disponible": 57.780062220000005}, {"linea": "3. Derivativos", "limite": 20.0, "consumo": 0.48931258004138123, "disponible": 19.510687419958618}, {"linea": "4. Trade & Garantias", "limite": 7.0, "consumo": 0.0, "disponible": 7.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 15.0, "consumo": 3.3863618, "disponible": 11.6136382}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 15.0, "consumo": 3.3863618, "disponible": 11.6136382}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 122.0, "consumo": 26.09561216004138, "disponible": 95.90438783995862}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "114": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "1. Soberano Offshore (b)", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}], "115": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 25.0, "consumo": 0.0, "disponible": 25.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "116": [{"linea": "1. Operações com empresas", "limite": 6.0, "consumo": 0.0, "disponible": 6.0}, {"linea": "1.1.Risco Direto", "limite": 6.0, "consumo": 0.0, "disponible": 6.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 3.0, "consumo": 0.0, "disponible": 3.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 9.0, "consumo": 0.0, "disponible": 9.0}, {"linea": "1. Soberano Offshore (b)", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}], "119": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 30.0, "consumo": 0.0, "disponible": 30.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "117": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 80.0, "consumo": 0.0, "disponible": 80.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 25.0, "consumo": 4.719179169999999, "disponible": 20.28082083}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 10.0, "consumo": 4.4161791699999995, "disponible": 5.5838208300000005}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 15.0, "consumo": 0.303, "disponible": 14.697}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 125.0, "consumo": 4.719179169999999, "disponible": 120.28082083}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 45.0, "consumo": 7.875, "disponible": 37.125}, {"linea": "Total Soberano", "limite": 45.0, "consumo": 7.875, "disponible": 37.125}], "118": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "120": [{"linea": "1. Operações com empresas", "limite": 37.0, "consumo": 0.0, "disponible": 37.0}, {"linea": "1.1.Risco Direto", "limite": 24.0, "consumo": 0.0, "disponible": 24.0}, {"linea": "1.2.Via Garantias", "limite": 13.0, "consumo": 0.0, "disponible": 13.0}, {"linea": "2. Gestão de Caixa", "limite": 6.0, "consumo": 0.0, "disponible": 6.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 3.0, "consumo": 0.0, "disponible": 3.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 4.0, "consumo": 0.0, "disponible": 4.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 50.0, "consumo": 0.0, "disponible": 50.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "121": [{"linea": "1. Operações com empresas", "limite": 25.0, "consumo": 0.0, "disponible": 25.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 25.0, "consumo": 0.0, "disponible": 25.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 1.0, "consumo": 0.0, "disponible": 1.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 31.0, "consumo": 0.0, "disponible": 31.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "122": [{"linea": "1. Operações com empresas", "limite": 15.0, "consumo": 0.0, "disponible": 15.0}, {"linea": "1.1.Risco Direto", "limite": 15.0, "consumo": 0.0, "disponible": 15.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 35.0, "consumo": 0.0, "disponible": 35.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "123": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 20.0, "consumo": 0.0, "disponible": 20.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "124": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 6.0, "consumo": 0.24446363000000002, "disponible": 5.75553637}, {"linea": "3. Derivativos", "limite": 5.0, "consumo": 0.0, "disponible": 5.0}, {"linea": "4. Trade & Garantias", "limite": 20.0, "consumo": 0.5, "disponible": 19.5}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 31.0, "consumo": 0.74446363, "disponible": 30.25553637}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}], "125": [{"linea": "1. Operações com empresas", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.1.Risco Direto", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "1.2.Via Garantias", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Gestão de Caixa", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "3. Derivativos", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "4. Trade & Garantias", "limite": 3.0, "consumo": 0.0, "disponible": 3.0}, {"linea": "5. Bonds | Aplicações LP", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6. Intragrupo", "limite": 9.0, "consumo": 0.0, "disponible": 9.0}, {"linea": "6.1.Gestión de Caixa Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "6.2.Trade & Garantías Intragrupo", "limite": 9.0, "consumo": 0.0, "disponible": 9.0}, {"linea": "6.3.Derivativos Intragrupo", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Transferência", "limite": 12.0, "consumo": 0.0, "disponible": 12.0}, {"linea": "1. Soberano Offshore (b)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "2. Soberano Local (c)", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}, {"linea": "Total Soberano", "limite": 0.0, "consumo": 0.0, "disponible": 0.0}]};
const LOGO = "data:image/png;base64,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";

const RIESGO_DATA = {};
Object.keys(RIESGO_DATA_RAW).forEach(pais => {
  RIESGO_DATA[pais] = RIESGO_DATA_RAW[pais].map(l => ({
    ...l,
    limite:     l.limite     * 1000000,
    consumo:    l.consumo    * 1000000,
    disponible: l.disponible * 1000000,
  }));
});

const fmtUSD = (n) => {
  if (!n && n !== 0) return "—";
  const abs = Math.abs(n);
  if (abs >= 1000000) return (n / 1000000).toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " MM USD";
  if (abs >= 1000)    return (n / 1000).toLocaleString("es-CO",    { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " K USD";
  return n.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " USD";
};

const ORANGE       = "#FF6200";
const ORANGE_DARK  = "#cc4f00";
const ORANGE_LIGHT = "#fff3ec";

const PRODUCT_LABELS = ["Trade & Garantías", "Gestão de Caixa", "Derivativos", "Bonds"];
const PRODUCT_TO_LINEA = {
  "Trade & Garantías": "4. Trade & Garantias",
  "Gestão de Caixa":   "2. Gestão de Caixa",
  "Derivativos":       "3. Derivativos",
  "Bonds":             "5. Bonds | Aplicações LP",
};

const allIds = [...new Set(CONSUMO_DATA.map(d => d.id))].sort((a, b) => a - b);

const ALL_ALERTAS = [];
Object.keys(RIESGO_DATA).forEach(pais => {
  RIESGO_DATA[pais].forEach(l => {
    if (!l.limite || l.limite === 0) return;
    const pct = (l.consumo / l.limite) * 100;
    if (pct >= 80) ALL_ALERTAS.push({ pais, linea: l.linea, pct, consumo: l.consumo, limite: l.limite, disponible: l.disponible });
  });
});
ALL_ALERTAS.sort((a, b) => b.pct - a.pct);

function Header({ onBack, title }) {
  return (
    <div style={{ background: ORANGE, padding: "16px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {onBack && (
          <button onClick={onBack} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontSize: 20, padding: "4px 12px", lineHeight: 1 }}>‹</button>
        )}
        <img src={LOGO} alt="Itaú" style={{ height: 140, borderRadius: 10 }} />
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{title}</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", marginTop: 2 }}>Valores en USD · Corte 02 Jun 2026</div>
      </div>
    </div>
  );
}

function Home({ onNavigate }) {
  const totalAlertas    = ALL_ALERTAS.length;
  const criticos        = ALL_ALERTAS.filter(a => a.pct >= 95).length;
  const paisesAfectados = [...new Set(ALL_ALERTAS.map(a => a.pais))].length;
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#f7f7f7", minHeight: "100vh" }}>
      <Header title="Dashboard de Cupos Disponibles" />
      <div style={{ padding: "40px 28px", maxWidth: 750, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 14, color: "#888", textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>¿Qué deseas consultar?</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#222" }}>Selecciona una opción</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <button onClick={() => onNavigate("busqueda")}
            style={{ background: "#fff", border: "2px solid " + ORANGE, borderRadius: 20, padding: "40px 28px", cursor: "pointer", textAlign: "left", boxShadow: "0 2px 12px rgba(255,98,0,0.1)", transition: "transform 0.15s, box-shadow 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(255,98,0,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(255,98,0,0.1)"; }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🔍</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#222", marginBottom: 8 }}>Búsqueda por ID</div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>Consulta cupos disponibles y riesgo país por ID Solcred</div>
            <div style={{ marginTop: 18, fontSize: 13, color: ORANGE, fontWeight: 600 }}>{allIds.length} registros disponibles →</div>
          </button>
          <button onClick={() => onNavigate("alertas")}
            style={{ background: criticos > 0 ? "#fef2f2" : "#fffbeb", border: "2px solid " + (criticos > 0 ? "#dc2626" : "#f59e0b"), borderRadius: 20, padding: "40px 28px", cursor: "pointer", textAlign: "left", boxShadow: "0 2px 12px rgba(220,38,38,0.1)", transition: "transform 0.15s, box-shadow 0.15s" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 28px rgba(220,38,38,0.2)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(220,38,38,0.1)"; }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>{criticos > 0 ? "🔴" : "🟡"}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#222", marginBottom: 8 }}>Alertas de Riesgo País</div>
            <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>Líneas con consumo ≥ 80% del límite asignado por país</div>
            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <span style={{ background: "#dc2626", color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>🔴 {criticos} críticas</span>
              <span style={{ background: "#f59e0b", color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>🟡 {totalAlertas - criticos} alertas</span>
              <span style={{ background: "#6b7280", color: "#fff", borderRadius: 20, padding: "4px 12px", fontSize: 12, fontWeight: 700 }}>{paisesAfectados} países</span>
            </div>
          </button>
        </div>
        <div style={{ marginTop: 32, background: "#fff", borderRadius: 16, padding: "24px 28px", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Resumen Global</div>
          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[["Entidades", allIds.length, "#333"], ["Países", [...new Set(CONSUMO_DATA.map(d => d.pais))].length, "#333"], ["Alertas activas", totalAlertas, totalAlertas > 0 ? "#f59e0b" : "#333"], ["Casos críticos", criticos, criticos > 0 ? "#dc2626" : "#333"]].map(t => (
              <div key={t[0]}>
                <div style={{ fontSize: 28, fontWeight: 800, color: t[2] }}>{t[1]}</div>
                <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{t[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Busqueda({ onBack }) {
  const [search, setSearch]             = useState("");
  const [selectedId, setSelectedId]     = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredIds = useMemo(() => {
    if (!search) return allIds;
    return allIds.filter(id => String(id).includes(search));
  }, [search]);

  const record = useMemo(() => {
    if (!selectedId) return null;
    return CONSUMO_DATA.find(d => d.id === selectedId) || null;
  }, [selectedId]);

  const riesgoLines = useMemo(() => {
    if (!record) return [];
    return RIESGO_DATA[record.pais] || [];
  }, [record]);

  const riesgoTotal = riesgoLines.find(l => l.linea === "Total Transferência");

  const alertas = riesgoLines.filter(l => {
    if (!l.limite || l.limite === 0) return false;
    return (l.consumo / l.limite) >= 0.8;
  }).map(l => ({ linea: l.linea, pct: (l.consumo / l.limite) * 100, consumo: l.consumo, limite: l.limite, disponible: l.disponible }));

  const handleSelect = (id) => { setSelectedId(id); setSearch(String(id)); setShowDropdown(false); };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#f7f7f7", minHeight: "100vh" }}>
      <Header onBack={onBack} title="Búsqueda por ID Solcred" />
      <div style={{ padding: "24px" }}>

        {/* Search box */}
        <div style={{ background: "#fff", borderRadius: 14, padding: "22px 26px", marginBottom: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#555", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>Buscar por ID Solcred</div>
          <div style={{ position: "relative" }}>
            <input value={search}
              onChange={e => { setSearch(e.target.value); setShowDropdown(true); setSelectedId(null); }}
              onFocus={() => setShowDropdown(true)}
              placeholder="Ej: 4275"
              style={{ width: "100%", boxSizing: "border-box", border: "2px solid " + ORANGE, borderRadius: 10, padding: "12px 16px", fontSize: 17, outline: "none", color: "#111" }} />
            {showDropdown && filteredIds.length > 0 && (
              <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #eee", borderRadius: 10, zIndex: 100, maxHeight: 240, overflowY: "auto", boxShadow: "0 4px 16px rgba(0,0,0,0.12)", marginTop: 4 }}>
                {filteredIds.slice(0, 50).map(id => (
                  <div key={id} onClick={() => handleSelect(id)}
                    style={{ padding: "11px 16px", cursor: "pointer", fontSize: 14, borderBottom: "1px solid #f3f4f6", color: "#111", background: id === selectedId ? ORANGE_LIGHT : "#fff" }}
                    onMouseEnter={e => { e.currentTarget.style.background = ORANGE_LIGHT; }}
                    onMouseLeave={e => { e.currentTarget.style.background = id === selectedId ? ORANGE_LIGHT : "#fff"; }}>
                    ID {id} — País {CONSUMO_DATA.find(d => d.id === id)?.pais}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#aaa" }}>{allIds.length} registros disponibles</div>
        </div>

        {record && (
          <>
            {/* ID Header */}
            <div style={{ background: ORANGE, borderRadius: 14, padding: "22px 28px", marginBottom: 22, display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", boxShadow: "0 2px 10px rgba(255,98,0,0.25)" }}>
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1.5 }}>ID Solcred</div>
                <div style={{ fontSize: 32, fontWeight: 800, color: "#fff" }}>{record.id}</div>
              </div>
              <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.3)" }} />
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1.5 }}>País</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>{record.pais}</div>
              </div>
              <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.3)" }} />
              <div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1.5 }}>Rating</div>
                <div style={{ fontSize: 19, fontWeight: 700, color: ORANGE, background: "#fff", borderRadius: 8, padding: "3px 12px", display: "inline-block" }}>{record.rating || "N/A"}</div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", letterSpacing: 1.5 }}>Total Disponible</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>{fmtUSD(record.totalDisponible)}</div>
              </div>
            </div>

            {/* ── CUPOS DISPONIBLES (primero) ── */}
            <div style={{ marginBottom: 22 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#222", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Cupos Disponibles por Tipo de Transacción</div>
              <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Consumo Bancos Internacionales (USD) · Riesgo País disponible por línea (USD)</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
                {PRODUCT_LABELS.map(tipo => {
                  const val         = record.disponibles[tipo] || 0;
                  const lineaRiesgo = riesgoLines.find(l => l.linea === PRODUCT_TO_LINEA[tipo]);
                  const limUSD      = lineaRiesgo ? lineaRiesgo.limite     : null;
                  const dispRiesgo  = lineaRiesgo ? lineaRiesgo.disponible : null;
                  const pct         = (limUSD && limUSD > 0) ? Math.min(100, (val / limUSD) * 100) : 0;
                  const barColor    = pct >= 95 ? "#dc2626" : pct >= 80 ? "#f59e0b" : ORANGE;
                  return (
                    <div key={tipo} style={{ background: "#fff", borderRadius: 14, padding: "22px 22px 18px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)", borderTop: "5px solid " + ORANGE }}>
                      <div style={{ fontSize: 12, color: "#777", fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: 0.8 }}>{tipo}</div>

                      {/* Disponible consumo */}
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: "#aaa", marginBottom: 3 }}>Disponible (Consumo)</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: val > 0 ? ORANGE_DARK : "#bbb" }}>{fmtUSD(val)}</div>
                      </div>

                      {/* Separador */}
                      <div style={{ height: 1, background: "#f0f0f0", marginBottom: 14 }} />

                      {/* Disponible riesgo país */}
                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, color: "#aaa", marginBottom: 3 }}>Disponible País (Riesgo)</div>
                        <div style={{ fontSize: 22, fontWeight: 800, color: dispRiesgo !== null && dispRiesgo > 0 ? "#1d4ed8" : "#bbb" }}>
                          {dispRiesgo !== null ? fmtUSD(dispRiesgo) : "—"}
                        </div>
                      </div>

                      {/* Barra consumo vs límite */}
                      {limUSD !== null && (
                        <>
                          <div style={{ height: 7, background: "#f0f0f0", borderRadius: 4 }}>
                            <div style={{ height: 7, borderRadius: 4, background: barColor, width: pct + "%", transition: "width 0.4s" }} />
                          </div>
                          <div style={{ fontSize: 10, color: "#aaa", marginTop: 5 }}>
                            Límite país: {fmtUSD(limUSD)} · <span style={{ color: barColor, fontWeight: 700 }}>{pct.toFixed(1)}% consumido</span>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── ALERTAS ── */}
            {alertas.length > 0 && (
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#222", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ background: "#dc2626", color: "#fff", borderRadius: 6, padding: "2px 10px", fontSize: 13 }}>⚠ {alertas.length}</span>
                  Alertas de Riesgo País
                </div>
                <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Líneas con consumo ≥ 80% del límite asignado al país</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {alertas.map((a, i) => {
                    const isCritical  = a.pct >= 95;
                    const borderColor = isCritical ? "#dc2626" : "#f59e0b";
                    const bgColor     = isCritical ? "#fef2f2" : "#fffbeb";
                    const textColor   = isCritical ? "#dc2626" : "#b45309";
                    const barColor    = isCritical ? "#dc2626" : "#f59e0b";
                    return (
                      <div key={i} style={{ background: bgColor, border: "1px solid " + borderColor, borderLeft: "6px solid " + borderColor, borderRadius: 12, padding: "16px 20px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                          <div>
                            <div style={{ fontSize: 12, fontWeight: 700, color: textColor, marginBottom: 3 }}>{isCritical ? "🔴 CRÍTICO" : "🟡 ALERTA"}</div>
                            <div style={{ fontSize: 15, fontWeight: 700, color: "#222" }}>{a.linea}</div>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: 26, fontWeight: 800, color: textColor }}>{a.pct.toFixed(1)}%</div>
                            <div style={{ fontSize: 10, color: "#888" }}>del límite consumido</div>
                          </div>
                        </div>
                        <div style={{ marginTop: 10, height: 8, background: "rgba(0,0,0,0.08)", borderRadius: 4 }}>
                          <div style={{ height: 8, borderRadius: 4, background: barColor, width: Math.min(100, a.pct) + "%", transition: "width 0.4s" }} />
                        </div>
                        <div style={{ display: "flex", gap: 24, marginTop: 10, fontSize: 12, color: "#555", flexWrap: "wrap" }}>
                          <span>Límite: <strong>{fmtUSD(a.limite)}</strong></span>
                          <span>Consumo: <strong style={{ color: textColor }}>{fmtUSD(a.consumo)}</strong></span>
                          <span>Disponible: <strong>{fmtUSD(a.disponible)}</strong></span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ── TABLA RIESGO PAÍS ── */}
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#222", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>Riesgo País — País {record.pais}</div>
              <div style={{ fontSize: 11, color: "#aaa", marginBottom: 14 }}>Fuente: Riesgo País · convertido a USD</div>
              {riesgoTotal && (
                <div style={{ display: "flex", gap: 14, marginBottom: 18, flexWrap: "wrap" }}>
                  {[["Límite Total", riesgoTotal.limite], ["Consumo Total", riesgoTotal.consumo], ["Disponible Total", riesgoTotal.disponible]].map(pair => {
                    const isDisp = pair[0] === "Disponible Total";
                    return (
                      <div key={pair[0]} style={{ background: isDisp ? ORANGE : "#fff", borderRadius: 12, padding: "16px 22px", boxShadow: "0 1px 4px rgba(0,0,0,0.07)", flex: 1, minWidth: 140 }}>
                        <div style={{ fontSize: 10, color: isDisp ? "rgba(255,255,255,0.8)" : "#888", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 5 }}>{pair[0]}</div>
                        <div style={{ fontSize: 22, fontWeight: 700, color: isDisp ? "#fff" : ORANGE_DARK }}>{fmtUSD(pair[1])}</div>
                      </div>
                    );
                  })}
                </div>
              )}
              {riesgoLines.length > 0 && (
                <div style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: ORANGE_LIGHT }}>
                        <th style={{ textAlign: "left",  padding: "12px 18px", fontWeight: 700, color: "#333", borderBottom: "2px solid " + ORANGE }}>Línea</th>
                        <th style={{ textAlign: "right", padding: "12px 18px", fontWeight: 700, color: "#333", borderBottom: "2px solid " + ORANGE }}>Límite (USD)</th>
                        <th style={{ textAlign: "right", padding: "12px 18px", fontWeight: 700, color: "#333", borderBottom: "2px solid " + ORANGE }}>Consumo (USD)</th>
                        <th style={{ textAlign: "right", padding: "12px 18px", fontWeight: 700, color: "#333", borderBottom: "2px solid " + ORANGE }}>Disponible (USD)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {riesgoLines.map((l, i) => {
                        const isTotal   = l.linea.startsWith("Total");
                        const isSubline = l.linea.startsWith("1.1") || l.linea.startsWith("1.2") || l.linea.startsWith("6.");
                        return (
                          <tr key={i} style={{ background: isTotal ? ORANGE_LIGHT : i % 2 === 0 ? "#fff" : "#fafafa", fontWeight: isTotal ? 700 : 400 }}>
                            <td style={{ padding: "11px 18px", paddingLeft: isSubline ? 34 : 18, color: "#333", borderBottom: "1px solid #f0f0f0" }}>{l.linea}</td>
                            <td style={{ padding: "11px 18px", textAlign: "right", color: "#555", borderBottom: "1px solid #f0f0f0" }}>{fmtUSD(l.limite)}</td>
                            <td style={{ padding: "11px 18px", textAlign: "right", color: "#555", borderBottom: "1px solid #f0f0f0" }}>{fmtUSD(l.consumo)}</td>
                            <td style={{ padding: "11px 18px", textAlign: "right", borderBottom: "1px solid #f0f0f0", color: l.disponible > 0 ? ORANGE_DARK : "#bbb", fontWeight: isTotal ? 700 : 400 }}>
                              {fmtUSD(l.disponible)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}

        {!record && (
          <div style={{ background: "#fff", borderRadius: 14, padding: "48px 28px", textAlign: "center", color: "#aaa", boxShadow: "0 1px 6px rgba(0,0,0,0.07)" }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>🔍</div>
            <div style={{ fontSize: 18, fontWeight: 600, color: "#333" }}>Busca un ID Solcred para ver sus cupos</div>
            <div style={{ fontSize: 13, marginTop: 8 }}>Disponible Consumo · Disponible Riesgo País · Todo en USD</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Alertas({ onBack }) {
  const [filtro, setFiltro] = useState("todas");
  const alertasFiltradas = filtro === "criticas" ? ALL_ALERTAS.filter(a => a.pct >= 95)
                         : filtro === "alerta"   ? ALL_ALERTAS.filter(a => a.pct >= 80 && a.pct < 95)
                         : ALL_ALERTAS;
  const criticos = ALL_ALERTAS.filter(a => a.pct >= 95).length;
  const normales = ALL_ALERTAS.filter(a => a.pct >= 80 && a.pct < 95).length;
  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: "#f7f7f7", minHeight: "100vh" }}>
      <Header onBack={onBack} title="Alertas de Riesgo País" />
      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", gap: 12, marginBottom: 22, flexWrap: "wrap" }}>
          {[["todas","Todas",ALL_ALERTAS.length,"#6b7280"],["criticas","Críticas",criticos,"#dc2626"],["alerta","Alertas",normales,"#f59e0b"]].map(f => (
            <button key={f[0]} onClick={() => setFiltro(f[0])}
              style={{ background: filtro === f[0] ? f[3] : "#fff", color: filtro === f[0] ? "#fff" : f[3], border: "2px solid " + f[3], borderRadius: 20, padding: "8px 20px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {f[1]} ({f[2]})
            </button>
          ))}
        </div>
        {alertasFiltradas.length === 0 ? (
          <div style={{ background: "#fff", borderRadius: 14, padding: "48px 28px", textAlign: "center", color: "#aaa" }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>✅</div>
            <div style={{ fontSize: 17, fontWeight: 600, color: "#333" }}>Sin alertas en esta categoría</div>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {alertasFiltradas.map((a, i) => {
              const isCritical  = a.pct >= 95;
              const borderColor = isCritical ? "#dc2626" : "#f59e0b";
              const bgColor     = isCritical ? "#fef2f2" : "#fffbeb";
              const textColor   = isCritical ? "#dc2626" : "#b45309";
              const barColor    = isCritical ? "#dc2626" : "#f59e0b";
              return (
                <div key={i} style={{ background: bgColor, border: "1px solid " + borderColor, borderLeft: "6px solid " + borderColor, borderRadius: 14, padding: "18px 22px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 5 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: textColor }}>{isCritical ? "🔴 CRÍTICO" : "🟡 ALERTA"}</span>
                        <span style={{ fontSize: 12, background: "#e5e7eb", color: "#374151", borderRadius: 6, padding: "2px 8px", fontWeight: 600 }}>País {a.pais}</span>
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#222" }}>{a.linea}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 30, fontWeight: 800, color: textColor }}>{a.pct.toFixed(1)}%</div>
                      <div style={{ fontSize: 11, color: "#888" }}>del límite consumido</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12, height: 9, background: "rgba(0,0,0,0.08)", borderRadius: 4 }}>
                    <div style={{ height: 9, borderRadius: 4, background: barColor, width: Math.min(100, a.pct) + "%", transition: "width 0.4s" }} />
                  </div>
                  <div style={{ display: "flex", gap: 28, marginTop: 12, fontSize: 13, color: "#555", flexWrap: "wrap" }}>
                    <span>Límite: <strong>{fmtUSD(a.limite)}</strong></span>
                    <span>Consumo: <strong style={{ color: textColor }}>{fmtUSD(a.consumo)}</strong></span>
                    <span>Disponible: <strong>{fmtUSD(a.disponible)}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  if (page === "busqueda") return <Busqueda onBack={() => setPage("home")} />;
  if (page === "alertas")  return <Alertas  onBack={() => setPage("home")} />;
  return <Home onNavigate={setPage} />;
}
