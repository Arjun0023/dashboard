# Dashboard Replication Assignment  

This project is a recreation of the provided UI design using **React** with a focus on interactivity, responsiveness, and theming. It incorporates features like pagination, charts, dynamic tables, and a light/dark theme toggle. The app is deployed and can be accessed through the provided live link.  

## Features  

- **UI Replication**: Closely replicates the layout and functionality of the provided design.  
- **Pagination**: Implemented for "Order History" and "Notifications" sections.  
- **Dynamic Charts**: Includes Pie and Bar charts for visualizing data.  
- **Theme Toggle**: Switch between light and dark themes using a toggle button.  
- **Reusable Components**: Modular components for better maintainability.  
- **Data-Driven**: Uses hardcoded JSON files to populate the UI.  
- **Deployment**: Hosted on a free platform for easy access.  

---

## File Structure  

```plaintext  
src  
├── mcharts        # Custom chart components (PieChart, BarChart, etc.)  
├── components     # Reusable React components (e.g., buttons, cards, tables)  
├── css            # Global and modular CSS styles  
├── images         # Static assets like icons and images  
├── pages          # Page components (e.g., Dashboard)  
│   └── Dashboard  # The main dashboard implementation  
├── partials       # Shared components like navigation bar and footer  
├── utils          # Utility functions (e.g., data formatting, theme management)  
```  

---

## How to Run Locally  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/Arjun0023/dashboard.git 
   cd dashboard  
   ```  

2. **Install Dependencies**  
   Ensure you have **Node.js** and **npm** installed, then run:  
   ```bash  
   npm install  
   ```  

3. **Start the Development Server**  
   ```bash  
   npm run dev  
   ```  
   The app will be available at [http://localhost:3000](http://localhost:3000).  

4. **Build for Production**  
   To create a production build, use:  
   ```bash  
   npm run build  
   ```  

---

## Deployment  

The app is deployed on **[Vercel](https://fireai-dashboard-three.vercel.app/)**. You can view the live version here:  
**[Live Demo](#)** (Replace `#` with the live link)  

---

## Libraries & Tools  

- **React**: For building the UI.  
- **React Router**: For navigation (if applicable).  
- **Chart.js**: For rendering charts.  
- **CSS Modules**: For styling.  
- **Vercel**: For deployment.  

---

## Light & Dark Theme Implementation  

- Managed via `useState` in the top-level component.  
- Theme-specific styles applied dynamically based on the current theme.  

---

## Future Enhancements  

- Replace hardcoded JSON data with a backend API.  
- Add authentication for a personalized user experience.  
- Include tests for components using Jest or React Testing Library.  

---

## Author  

Developed by [Arjun Pawar](https://github.com/Arjun0023). Feel free to reach out for any questions or suggestions!  

---

## Feedback  

Your feedback is valuable! Please open an issue or submit a pull request for any suggestions or improvements.  
